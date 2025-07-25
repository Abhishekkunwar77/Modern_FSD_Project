import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState(""); // Only for signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("zaplog_users")) || [];

    if (isSignup) {
      const exists = users.find((user) => user.email === email);
      if (exists) {
        toast.error("User already exists!");
        return;
      }
      const updatedUsers = [...users, { name, email, password }];
      localStorage.setItem("zaplog_users", JSON.stringify(updatedUsers));
      localStorage.setItem("zaplog_loggedin", JSON.stringify({ name, email }));
      toast.success("Signup successful!");
      navigate("/");
    } else {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        localStorage.setItem(
          "zaplog_loggedin",
          JSON.stringify({ name: user.name, email })
        );
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Invalid credentials!");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  px-4">
      <form
        onSubmit={handleAuth}
        className="max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white shadow-md"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {isSignup ? "Sign up" : "Login"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          {isSignup ? "Create your account" : "Please sign in to continue"}
        </p>

        {/* Name Field (Signup only) */}
        {isSignup && (
          <div className="flex items-center w-full mt-8 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <FaUser className="text-gray-500" />
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={isSignup}
            />
          </div>
        )}

        {/* Email Field */}
        <div
          className={`flex items-center w-full ${
            isSignup ? "mt-4" : "mt-10"
          } bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2`}
        >
          <FaEnvelope className="text-gray-500" />
          <input
            type="email"
            placeholder="Email id"
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <FaLock className="text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* No Forgot Password */}

        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity hover:cursor-pointer"
        >
          {isSignup ? "Sign up" : "Login"}
        </button>

        <p className="text-gray-500 text-sm mt-3 mb-11">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span
                className="text-indigo-500 cursor-pointer"
                onClick={() => setIsSignup(false)}
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                className="text-indigo-500 cursor-pointer"
                onClick={() => setIsSignup(true)}
              >
                Sign up
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
