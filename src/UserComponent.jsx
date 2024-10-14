import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersComponent = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUser, setEditingUser] = useState(null);

  const apiUrl = 'http://localhost:3001';

  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(apiUrl);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Save a new user
  const saveUser = async () => {
    try {
      const response = await axios.post(apiUrl, newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  // Update an existing user
  const updateUser = async (id) => {
    try {
      const response = await axios.put(`${apiUrl}/${id}`, editingUser);
      setUsers(users.map(user => (user.id === id ? response.data : user)));
      setEditingUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>

      <div>
        <h2>Add New User</h2>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={e => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={e => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={saveUser}>Save</button>
      </div>

      <div>
        <h2>Users List</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
              <button onClick={() => deleteUser(user.id)}>Delete</button>
              <button onClick={() => setEditingUser(user)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>

      {editingUser && (
        <div>
          <h2>Edit User</h2>
          <input
            type="text"
            value={editingUser.name}
            onChange={e => setEditingUser({ ...editingUser, name: e.target.value })}
          />
          <input
            type="email"
            value={editingUser.email}
            onChange={e => setEditingUser({ ...editingUser, email: e.target.value })}
          />
          <button onClick={() => updateUser(editingUser.id)}>Update</button>
        </div>
      )}
    </div>
  );
};

export default UsersComponent;
