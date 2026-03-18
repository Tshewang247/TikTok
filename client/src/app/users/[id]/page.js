'use client';

import { useEffect, useState } from 'react';
import { use } from 'react';
import Link from 'next/link';

export default function UserProfile({ params }) {
  const params_resolved = use(params);
  const id = params_resolved.id;
  const [user, setUser] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUserId = 1; // hardcoded for now

  useEffect(() => {
    Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`).then(r => r.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}/videos`).then(r => r.json()),
    ]).then(([userData, videosData]) => {
      setUser(userData);
      setVideos(videosData);
      setLoading(false);
    });
  }, [id]);

  const handleFollow = async (alreadyFollowing) => {
    const method = alreadyFollowing ? 'DELETE' : 'POST';
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}/followers`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ followerId: currentUserId }),
    });
    // refresh user
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`);
    const data = await res.json();
    setUser(data);
  };

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-black">
      <p className="text-white text-xl">Loading...</p>
    </div>
  );

  if (user.error) return (
    <div className="flex items-center justify-center h-screen bg-black">
      <p className="text-white text-xl">User not found</p>
    </div>
  );

  const alreadyFollowing = user.followers.includes(currentUserId);
  const isOwnProfile = parseInt(id) === currentUserId;

  return (
    <main className="bg-black min-h-screen flex flex-col items-center">
      {/* Back button */}
      <div className="w-full max-w-md pt-4 px-4">
        <Link href="/" className="text-zinc-400 text-sm">← Back to feed</Link>
      </div>

      {/* Profile Header */}
      <div className="w-full max-w-md flex flex-col items-center py-8 px-4">
        <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-white text-3xl font-bold mb-4">
          {user.name[0].toUpperCase()}
        </div>
        <h1 className="text-white text-2xl font-bold">{user.name}</h1>
        <p className="text-zinc-400 text-sm mt-1">{user.email}</p>

        {/* Stats */}
        <div className="flex gap-8 mt-6">
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-lg">{videos.length}</span>
            <span className="text-zinc-400 text-xs">Videos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-lg">{user.followers.length}</span>
            <span className="text-zinc-400 text-xs">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-lg">{user.following.length}</span>
            <span className="text-zinc-400 text-xs">Following</span>
          </div>
        </div>

        {/* Follow Button */}
        {!isOwnProfile && (
          <button
            onClick={() => handleFollow(alreadyFollowing)}
            className={`mt-6 px-8 py-2 rounded-full font-semibold text-sm transition-all ${
              alreadyFollowing
                ? 'bg-zinc-700 text-white'
                : 'bg-pink-500 text-white'
            }`}
          >
            {alreadyFollowing ? 'Unfollow' : 'Follow'}
          </button>
        )}
      </div>

      {/* User Videos */}
      <div className="w-full max-w-md px-4">
        <h2 className="text-white font-semibold text-lg mb-4">Videos</h2>
        {videos.length === 0 ? (
          <p className="text-zinc-500 text-sm">No videos yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {videos.map(video => (
              <div key={video.id} className="bg-zinc-900 rounded-xl overflow-hidden">
                <div className="bg-zinc-800 w-full h-40 flex items-center justify-center">
                  <p className="text-zinc-500 text-xs text-center px-2">🎬</p>
                </div>
                <div className="p-2">
                  <p className="text-white text-sm font-medium truncate">{video.title}</p>
                  <p className="text-zinc-400 text-xs">❤️ {video.likes.length}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}