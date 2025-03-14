"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    alert("Login successful!"); // Replace with actual authentication logic

  return (
    <div className="container my-5">
                <nav className="bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center relative">
        <h1 className="text-xl md:text-2xl font-bold text-white">Alumni Portal</h1>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
            
        </div>
        {/* Desktop Menu */}
        <div className={`absolute md:static top-6 left-0 w-full md:w-auto  md:flex md:space-x-4 transition-all "hidden"}`}>
          <a href="/login" className="block md:inline bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-300">Login</a>
          <a href="/register" className="block md:inline bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-300">Register</a>
        </div>
        </nav>
      <h2 className="text-center mb-4">Alumni Portal Login</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <form onSubmit={handleLogin}>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 position-relative">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                  </button>
                </div>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <div className="text-center mt-3">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
