import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);
    setError(null);
    if (!formData.username || !formData.email || !formData.password) {
      toast.error("Please fill out all the fields!");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/backend/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        toast.error(data.message || "Something went wrong!");
        setLoading(false);
        return;
      }
      setLoading(false);
      if (res.ok) {
        toast.success("Account created successfully!");
        navigate("/signin");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <div className="px-3 pb-12">
      <div className="flex flex-col items-center justify-center gap-6 mt-24 py-4 max-w-lg mx-auto bg-gray-200 rounded-md shadow-lg">
        <h1 className="text-3xl text-gray-800 font-bold mt-1">Register</h1>
        <p className="px-2 sm:px-8 text-center text-gray-500 text-[14px]">
          Create your free account in seconds. Join MegBazaar and start shopping
          smarter today!
        </p>
        <form
          className="flex flex-col gap-4 w-full pt-2 px-2 sm:px-8"
          onSubmit={handleSubmit}
        >
          {/* Username */}
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 rounded-md py-2 px-3 border-2 border-gray-200 outline-none text-gray-500"
              id="username"
              name="username"
              required
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 rounded-md py-2 px-3 border-2 border-gray-200 outline-none text-gray-500"
              id="email"
              name="email"
              required
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 rounded-md py-2 px-3 border-2 border-gray-200 outline-none text-gray-500"
              id="password"
              name="password"
              required
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="flex flex-col">
            <button
              type="submit"
              className="bg-blue-500 py-2 text-white rounded-md hover:bg-blue-600 transition duration-200"
              disabled={loading}
            >
              {loading ? "Loading..." : "Create account"}
            </button>
          </div>
        </form>
        <div className="text-gray-500 text-[15px]">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 hover:text-blue-700 cursor-pointer hover:underline transition duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
