// Must be logged in to Git for this to work.

import React from 'react';
// Starting from react-router-dom v6, 'Routes' to be used instad of 'Switch'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList'; // Import the UserList component
import UserDetails from './UserDetails'; // Import the UserDetails component

function App() {
  return (
    <Router>
      <Routes>
        {/* 
          Route to render the UserList component when the path is exactly '/'.
          This is the default screen of the application.
          
          ** element={<UserList />} to be used instead of component={ UserList } after migration/update 
        */}
        <Route exact path="/" element={<UserList />} />
        {/* 
          Route to render the UserDetails component when the path matches '/user/:username',
          where ':username' is a parameter representing the username of a GitHub user.
        */}
        <Route path="/user/:username" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;