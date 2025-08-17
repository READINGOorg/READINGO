import React from "react";

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <span style={{ marginRight: "20px" }}>📚 Readingo</span>
      {user ? (
        <>
          <span style={{ marginRight: "20px" }}>Welcome, {user.username}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <span>Login to continue</span>
      )}
    </nav>
  );
};

export default Navbar;
