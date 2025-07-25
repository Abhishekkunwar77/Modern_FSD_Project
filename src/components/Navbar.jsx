import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ZaplogLogo from "../assets/ZaplogLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // 🔥 watches route changes

  // Sync login state from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("zaplog-user"));
    setIsLoggedIn(!!user);
  }, [location]); // 👈 reruns on every route change

  const handleLogout = () => {
    localStorage.removeItem("zaplog-user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all shadow-sm">
      <Link to="/">
        <img
          src={ZaplogLogo}
          alt="ZapLog Logo"
          className="h-10 w-auto cursor-pointer"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden sm:flex items-center gap-8 text-gray-700 font-medium">
        <Link to="/" className="hover:text-cyan-600 transition">
          Home
        </Link>{" "}
        <a href="#contact" className="hover:text-cyan-600 transition">
          Contact
        </a>
        <Link to="/about" className="hover:text-cyan-600 transition">
          About Us
        </Link>
        <Link to="/add-activities" className="hover:text-cyan-600 transition">
          Add Activity
        </Link>
        <Link to="/view-activities" className="hover:text-cyan-600 transition">
          View Activities
        </Link>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="cursor-pointer px-6 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full text-sm"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="cursor-pointer px-6 py-2 bg-cyan-600 hover:bg-cyan-700 transition text-white rounded-full text-sm"
          >
            Login
          </Link>
        )}
      </div>

      {/* Hamburger for Mobile */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
        className="sm:hidden z-20"
      >
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="2" rx="1" fill="#0e7490" />
          <rect y="8" width="24" height="2" rx="1" fill="#0e7490" />
          <rect y="16" width="24" height="2" rx="1" fill="#0e7490" />
        </svg>
      </button>

      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-full left-0 w-full bg-white shadow-lg py-4 flex-col items-start gap-4 px-6 text-sm sm:hidden transition-all z-10`}
      >
        <Link
          to="/"
          className="hover:text-cyan-600 transition"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/add-activities"
          className="hover:text-cyan-600 transition"
          onClick={() => setOpen(false)}
        >
          Add Activity
        </Link>
        <Link
          to="/view-activities"
          className="hover:text-cyan-600 transition"
          onClick={() => setOpen(false)}
        >
          View Activities
        </Link>

        {isLoggedIn ? (
          <button
            onClick={() => {
              setOpen(false);
              handleLogout();
            }}
            className="cursor-pointer px-6 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full text-sm"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="cursor-pointer px-6 py-2 bg-cyan-600 hover:bg-cyan-700 transition text-white rounded-full text-sm"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
