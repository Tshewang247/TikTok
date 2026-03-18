const dataStore = {
  users: [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      followers: [],
      following: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com',
      followers: [],
      following: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  videos: [
    {
      id: 1,
      title: 'My First Video',
      description: 'Hello world!',
      url: 'https://example.com/video1.mp4',
      userId: 1,
      likes: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Second Video',
      description: 'Another video',
      url: 'https://example.com/video2.mp4',
      userId: 2,
      likes: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  comments: [
    {
      id: 1,
      text: 'Great video!',
      userId: 2,
      videoId: 1,
      likes: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]
};

module.exports = { dataStore };