import React from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-[#f4f7f4] flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white shadow rounded-xl p-8 border border-green-200">
        <div className="text-3xl font-bold text-center text-green-700 mb-6">
          Reset Password
        </div>
        <div className="text-gray-600 text-center mb-6">
          Create a new password for your account
        </div>
        <form className="space-y-4">
          <div>
            <div className="text-green-700">New Password</div>
            <input
              type="password"
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter new password"
              required
            />
          </div>
          <div>
            <div className="text-green-700">Confirm New Password</div>
            <input
              type="password"
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirm new password"
              required
            />
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded font-semibold">Reset Password</button>
          <div className="text-sm text-center text-gray-700">
            <Link to="/login" className="text-green-700 font-semibold">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}