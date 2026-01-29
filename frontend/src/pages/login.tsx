import React from "react";
import axios from "axios";
const Login: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };  
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/login",
        data
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      alert("Login successful:"+ response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBF2E8] px-4">
      <div className="w-full max-w-md bg-white rounded-4xl shadow-xl p-8 sm:p-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center shadow-md">
            <span className="text-white text-2xl font-bold">B</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Bal Gurukul
        </h1>
        <p className="text-center text-sm text-gray-400 tracking-wide mt-1">
          CENTER ACCESS
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* ID */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="username"
              name="username"
              className="w-full rounded-xl bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="••••••••"
              name="password"
              className="w-full rounded-xl bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-4 rounded-full bg-orange-500 py-3 text-white font-semibold shadow-lg hover:bg-orange-600 active:scale-[0.98] transition"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
