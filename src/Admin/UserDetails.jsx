import React from 'react';
import './DashBoard.css';

// Mock data (In a real app, you would fetch this from an API)
const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890'},
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '234-567-8901'},
    { id: 3, name: 'Alice Johnson', email: 'alicejohnson@example.com', phone: '345-678-9012' },
    { id: 4, name: 'Bob Brown', email: 'bobbrown@example.com', phone: '456-789-0123' }
  ];

const DashBoard = () => {
  return (
    <div className="admin-page">
    <h1>User Details</h1>
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default DashBoard;
