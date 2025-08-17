import React from "react";

const Profile = ({ user }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>👤 Profile</h2>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Role:</b> {user.role}</p>
      <p><b>ID:</b> {user.id}</p>
    </div>
  );
};

export default Profile;
