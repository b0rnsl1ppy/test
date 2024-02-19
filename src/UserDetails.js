import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
  const { username } = useParams(); // Get username from git user URL params
  const [user, setUser] = useState(null); // State to store user details

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`) // Fetch user details from GitHub API
      .then(response => response.json()) // Parse response as JSON
      .then(data => setUser(data)) // Update state with fetched user details
      .catch(error => console.error('Error fetching user details:', error)); // Log any errors
  }, [username]); // Run effect whenever username param changes

  return (
    <div>
      <h1>User Details</h1>
      {user && (
        <div>
          <img src={user.avatar_url} alt="Avatar" />
          <h2>{user.name}</h2>
          <p>Username: {user.login}</p>
          <p>Company: {user.company || 'N/A'}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repositories: {user.public_repos}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default UserDetails;