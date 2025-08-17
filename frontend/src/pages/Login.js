import React, { useState } from "react";
import API from "../services/api";

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await API.post("/auth/login", { email: form.email, password: form.password });
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
      } else {
        await API.post("/auth/register", form);
        alert("Registered successfully! Now login.");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      {!isLogin && (
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>{isLogin ? "Login" : "Register"}</button>
      <p>
        {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
        <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register here" : "Login here"}
        </span>
      </p>
    </div>
  );
};

export default Login;
