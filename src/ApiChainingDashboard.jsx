import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function ApiChainingDashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [postDetails, setPostDetails] = useState({ title: '', body: '' });
  const [submittedPostDetails, setSubmittedPostDetails] = useState(null); // New state for storing submitted post details
  const [postId, setPostId] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  // Step 1: Fetch Users List
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Step 2: Create Post for Selected User
  const handleCreatePost = () => {
    if (selectedUserId && postDetails.title && postDetails.body) {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', {
          title: postDetails.title,
          body: postDetails.body,
          userId: selectedUserId,
        })
        .then((response) => {
          setPostId(response.data.id);
          setSubmittedPostDetails({ ...postDetails }); // Set the post details only after submission
        })
        .catch((error) => console.error('Error creating post:', error));
    }
  };

  // Step 3: Fetch Comments for New Post
  useEffect(() => {
    if (postId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => setComments(response.data))
        .catch((error) => console.error('Error fetching comments:', error));
    }
  }, [postId]);

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-900">API Chaining Dashboard</h1>

      {/* Step 1: Select User */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Select a User</h2>
        <select
          onChange={(e) => setSelectedUserId(e.target.value)}
          className="block w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
        >
          <option value="">--Select User--</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.id}
            </option>
          ))}
        </select>
      </div>

      {/* Step 2: Create Post */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Create a Post</h2>
        <input
          type="text"
          placeholder="Post Title"
          value={postDetails.title}
          onChange={(e) => setPostDetails({ ...postDetails, title: e.target.value })}
          className="block w-full p-3 mb-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
        />
        <textarea
          placeholder="Post Body"
          value={postDetails.body}
          onChange={(e) => setPostDetails({ ...postDetails, body: e.target.value })}
          className="block w-full p-3 mb-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
        />
        <button
          onClick={handleCreatePost}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Submit Post
        </button>
      </div>

      {/* Step 3: Display Submitted Post */}
      {submittedPostDetails && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Submitted Post:</h2>
          <div className="mb-6">
            <ul className="space-y-4">
              <strong className="block text-gray-800 mb-1">{submittedPostDetails.title}</strong>
              <p className="text-gray-600">{submittedPostDetails.body}</p>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApiChainingDashboard;
