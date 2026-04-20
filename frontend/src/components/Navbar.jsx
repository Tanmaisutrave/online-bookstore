import React, { useEffect, useState } from "react";
import Login from "./Login";

function Navbar() {
  const [user, setUser] = useState(null);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  );

  const [sticky, setSticky] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    alert('Logged out successfully!');
    window.location.href = '/';
  };

  // Theme Effect
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Sticky Navbar Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 
      dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 
      ${sticky ? "shadow-md bg-base-200 dark:bg-slate-600 duration-300 transition-all ease-in-out" : ""}`}
    >
      <div className="navbar flex justify-between items-center">

        {/* Left Section */}
        <div className="navbar-start flex items-center gap-3">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              ☰
            </div>

            <ul className="menu menu-sm dropdown-content bg-base-200 rounded-box mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>

          <a className="text-2xl font-bold cursor-pointer">
            bookStore
          </a>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end flex items-center space-x-3">

          {/* Search */}
          <div className="hidden md:block">
            <label className="px-3 py-2 border rounded-md flex items-center gap-2">
              <input type="text" className="grow outline-none dark:bg-slate-900 dark:text-white" placeholder="Search" />
            </label>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-xl"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Login */}
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                <div className="bg-pink-500 text-white rounded-full w-10">
                  <span>{user?.fullname?.charAt(0).toUpperCase()}</span>
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-slate-800">
                <li className="menu-title">
                  <span>{user?.fullname}</span>
                  <span className="text-xs">{user?.email}</span>
                </li>
                <li><a onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
          ) : (
            <>
              <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </a>
              <Login />
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default Navbar;