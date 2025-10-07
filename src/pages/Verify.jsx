import React from "react";
import { Link } from "react-router-dom";

export default function Verify() {
  return (
    <div className="min-h-screen bg-[#f4f7f4] flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white shadow rounded-xl p-8 border border-green-200">
        <div className="text-3xl font-bold text-center text-green-700 mb-6">Verify Your Account</div>
        <div className="text-gray-600 text-center mb-6">Enter the OTP code sent to your email or phone number</div>
        <form className="space-y-4">
          <div>
            <div className="text-green-700">OTP Code</div>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter 6-digit code"
              required
            />
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded font-semibold">Verify Account</button>
          <div className="text-sm text-center text-gray-700">
            Didn't receive code?{" "}
            <Link to="/resendotp" className="text-green-700 font-semibold">
              Resend OTP
            </Link>
          </div>
          <div className="text-sm text-center text-gray-700">
            <Link to="/login" className="text-green-700 font-semibold">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}