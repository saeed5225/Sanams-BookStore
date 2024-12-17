import React, { useState } from "react";
import banner from "../../public/Signup.png";
import Login from "./Login";

export default function Signup() {
  const [data, setdata] = useState({});

  const handleChange = (e) => {
    setdata({ ...data, [e.target.id]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Form Container */}
      <div className="max-w-screen-2xl mx-auto flex md:flex-row flex-col items-center space-x-8 px-4">
        {/* Form Section */}
        <div className="md:order-1 order-2 md:w-1/2 border border-gray-300 dark:border-white dark:bg-inherit rounded-lg shadow-lg bg-white p-8">
          <h1 className="text-center dark:text-white text-3xl font-serif font-extrabold text-gray-800 mb-8">
            Sign <span className="text-pink-500">Up</span>
          </h1>
          <form onSubmit={handleLogin}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold dark:text-white text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  required
                  onChange={handleChange}
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border p-2 mt-1 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold dark:text-white text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  required
                  onChange={handleChange}
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border mt-1 p-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold dark:text-white text-gray-700">
                  Password:
                </label>
                <input
                  type="password"
                  required
                  onChange={handleChange}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full border p-2 mt-1 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 mt-6 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Sign Up
              </button>
            </div>
          </form>
          {/* Sign In Text */}
          <div className="text-center text-sm text-gray-600 dark:text-white mt-4">
            Already have an account?{" "}
            <a
              onClick={() => {
                document.getElementById("login_modal").showModal();
              }}
              className="text-pink-500 hover:underline cursor-pointer"
            >
              Login
            </a>
            <Login />
          </div>
        </div>

        {/* Image Container */}
        <div className="md:order-2 order-1 w-full md:w-1/2 flex justify-center items-center">
          <img
            src={banner}
            alt="Signup Banner"
            className="max-w-full md:h-[500px] h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
