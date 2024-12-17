import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setdata] = useState({});

  const handleChange = (e) => {
    setdata({ ...data, [e.target.id]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <dialog id="login_modal" className="modal">
      <div className="dark:bg-slate-900 dark:text-white modal-box">
        <div className="flex flex-row justify-between">
          <h3 className="font-extrabold text-xl font-serif">Login</h3>

          <button
            onClick={() => {
              document.getElementById("login_modal").close();
              navigate("/");
            }}
            className="absolute top-6 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mt-5 flex flex-col space-y-1 text-left">
            <span className="font-semibold">Email:</span>
            <input
              onChange={handleChange}
              id="email"
              type="email"
              required
              placeholder="Enter your Email"
              className="border p-2 dark:border-white border-gray-300 rounded-md text-black"
            />
            <br></br>

            <span className="font-semibold">Password:</span>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={handleChange}
              id="password"
              className="border p-2 dark:border-white text-black border-gray-300 rounded-md "
            />
          </div>
          <div className="modal-action flex justify-between items-center">
            <button type="submit" className="btn btn-secondary">
              Login
            </button>
            <p className="text-sm">
              Not Registered?{" "}
              <span className=" text-blue-500 cursor-pointer hover:underline">
                <Link to="/signup" className="text-pink-500">
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}
