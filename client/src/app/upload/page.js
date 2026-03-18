'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Upload() {
  const router = useRouter();
  const [form, setForm] = useState({ title: '', description: '', url: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const userId = 1; // hardcoded for now

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.title || !form.url) {
      setError('Title and URL are required!');
      return;
    }

    setLoading(true);
    setError('');

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/videos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, userId }),
    });

    if (res.ok) {
      router.push('/'); // go back to feed after upload
    } else {
      const data = await res.json();
      setError(data.error || 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <main className="bg-black min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-md pt-4 px-4">
        <Link href="/" className="text-zinc-400 text-sm">← Back to feed</Link>
      </div>

      <div className="w-full max-w-md px-4 py-8">
        <h1 className="text-white text-2xl font-bold mb-8">Upload Video</h1>

        {/* Upload Icon */}
        <div className="bg-zinc-900 rounded-xl w-full h-48 flex flex-col items-center justify-center mb-8 border-2 border-dashed border-zinc-700">
          <p className="text-5xl mb-3">🎬</p>
          <p className="text-zinc-400 text-sm">Paste your video URL below</p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-zinc-400 text-sm mb-1 block">Title *</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Give your video a title..."
              className="w-full bg-zinc-900 text-white rounded-xl px-4 py-3 outline-none placeholder-zinc-600 border border-zinc-800 focus:border-pink-500 transition-all"
            />
          </div>

          <div>
            <label className="text-zinc-400 text-sm mb-1 block">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe your video..."
              rows={3}
              className="w-full bg-zinc-900 text-white rounded-xl px-4 py-3 outline-none placeholder-zinc-600 border border-zinc-800 focus:border-pink-500 transition-all resize-none"
            />
          </div>

          <div>
            <label className="text-zinc-400 text-sm mb-1 block">Video URL *</label>
            <input
              type="text"
              name="url"
              value={form.url}
              onChange={handleChange}
              placeholder="https://example.com/video.mp4"
              className="w-full bg-zinc-900 text-white rounded-xl px-4 py-3 outline-none placeholder-zinc-600 border border-zinc-800 focus:border-pink-500 transition-all"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-pink-500 text-white font-semibold py-3 rounded-xl mt-2 disabled:opacity-50 transition-all"
          >
            {loading ? 'Uploading...' : 'Post Video'}
          </button>
        </div>
      </div>
    </main>
  );
}