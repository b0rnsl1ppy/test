import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  // State to store fetched users
  const [users, setUsers] = useState([]);

  // Effect to fetch users from GitHub API when the component mounts
  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json()) // Parse response as JSON
      .then(data => setUsers(data)) // Update state with fetched users
      .catch(error => console.error('Error fetching users:', error)); // Log any errors
  }, []); // Run effect only once when component mounts

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {/* 
          Map through users and render list items with links to UserDetails component.
          Each list item corresponds to a GitHub user.
        */}
        {users.map(user => (
          <li key={user.id}>
            {/* 
              Create a link to the UserDetails component for each user.
              Clicking on the link will navigate to the UserDetails page for the respective user.
            */}
            <Link to={`/user/${user.login}`}>
              {/* Render the user's avatar image */}
              <img src={user.avatar_url} alt="Avatar" />
              <div>
                {/* No object data (K/V) in API for User's first & last name so N/A will be displayed */}
                <p>First Name: {user.name ? user.name.split(' ')[0] : 'N/A'}</p>
                <p>Last Name: {user.name ? user.name.split(' ')[1] : 'N/A'}</p>
                {/* Render the user's login username */}
                <p>Username: {user.login}</p>
              </div>

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;