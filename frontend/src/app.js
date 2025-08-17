import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Books from "./pages/Books";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      {user ? (
        <>
          <Books user={user} />
          <Profile user={user} />
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
