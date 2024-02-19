import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]); // State to store fetched users

  useEffect(() => {
    fetch('https://api.github.com/users') // Fetch users from GitHub API
      .then(response => response.json()) // Parse response as JSON
      .then(data => setUsers(data)) // Update state with fetched users
      .catch(error => console.error('Error fetching users:', error)); // Log any errors
  }, []); // Run effect only once when component mounts

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {/* Map through users and render list items with links to UserDetails component */}
        {users.map(user => (
          <ol key={user.id}>
            <Link to={`/user/${user.login}`}>
              <img src={user.avatar_url} alt="Avatar" />
              {user.name ? `${user.name} (${user.login})` : user.login}
            </Link>
          </ol>
        ))}
      </ul>
    </div>
  );
}

export default UserList;