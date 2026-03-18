'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openComments, setOpenComments] = useState(null); // which video's comments are open
  const [comments, setComments] = useState({}); // comments per video
  const [newComment, setNewComment] = useState('');
  const userId = 1;

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/videos`)
      .then(res => res.json())
      .then(data => {
        setVideos(data);
        setLoading(false);
      });
  }, []);

  const handleLike = async (videoId, alreadyLiked) => {
    const method = alreadyLiked ? 'DELETE' : 'POST';
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/videos/${videoId}/likes`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/videos`);
    const data = await res.json();
    setVideos(data);
  };

  const loadComments = async (videoId) => {
    if (openComments === videoId) {
      setOpenComments(null); // close if already open
      return;
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/videos/${videoId}/comments`);
    const data = await res.json();
    setComments(prev => ({ ...prev, [videoId]: data }));
    setOpenComments(videoId);
  };

  const handleAddComment = async (videoId) => {
    if (!newComment.trim()) return;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newComment, userId, videoId }),
    });
    setNewComment('');
    // reload comments
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/videos/${videoId}/comments`);
    const data = await res.json();
    setComments(prev => ({ ...prev, [videoId]: data }));
  };

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-black">
      <p className="text-white text-xl">Loading...</p>
    </div>
  );

  return (
    <main className="bg-black min-h-screen flex flex-col items-center">
      <h1 className="text-white text-2xl font-bold py-4">For You</h1>
      <div className="w-full max-w-md flex flex-col gap-6 pb-10">
        {videos.map(video => {
          const alreadyLiked = video.likes.includes(userId);
          const videoComments = comments[video.id] || [];

          return (
            <div key={video.id} className="bg-zinc-900 rounded-xl overflow-hidden">
              {/* Video Player */}
              <div className="bg-zinc-800 w-full h-96 flex items-center justify-center">
                <p className="text-zinc-500 text-sm">🎬 {video.url}</p>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <p className="text-white font-semibold text-lg">{video.title}</p>
                <p className="text-zinc-400 text-sm mt-1">{video.description}</p>

                {/* Actions */}
                <div className="flex gap-6 mt-4">
                  <button
                    onClick={() => handleLike(video.id, alreadyLiked)}
                    className={`flex items-center gap-2 text-sm font-medium transition-all ${
                      alreadyLiked ? 'text-pink-500' : 'text-white'
                    }`}
                  >
                    {alreadyLiked ? '❤️' : '🤍'} {video.likes.length}
                  </button>
                  <button
                    onClick={() => loadComments(video.id)}
                    className="flex items-center gap-2 text-white text-sm"
                  >
                    💬 {openComments === video.id ? 'Hide' : 'Comments'}
                  </button>
                  <button className="flex items-center gap-2 text-white text-sm">
                    🔗 Share
                  </button>
                </div>

                {/* Comments Section */}
                {openComments === video.id && (
                  <div className="mt-4 border-t border-zinc-700 pt-4">
                    {/* Existing Comments */}
                    <div className="flex flex-col gap-3 mb-4 max-h-48 overflow-y-auto">
                      {videoComments.length === 0 ? (
                        <p className="text-zinc-500 text-sm">No comments yet. Be first!</p>
                      ) : (
                        videoComments.map(comment => (
                          <div key={comment.id} className="flex gap-2">
                            <div className="w-7 h-7 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                              U
                            </div>
                            <div>
                              <p className="text-zinc-400 text-xs">User {comment.userId}</p>
                              <p className="text-white text-sm">{comment.text}</p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Add Comment */}
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleAddComment(video.id)}
                        placeholder="Add a comment..."
                        className="flex-1 bg-zinc-800 text-white text-sm rounded-full px-4 py-2 outline-none placeholder-zinc-500"
                      />
                      <button
                        onClick={() => handleAddComment(video.id)}
                        className="bg-pink-500 text-white text-sm px-4 py-2 rounded-full font-medium"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}