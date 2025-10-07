import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#f4f7f4] flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white shadow rounded-xl p-8 border border-green-200">
        <div className="text-3xl font-bold text-center text-green-700 mb-6">
          Create Your Account
        </div>
        <form className="space-y-4">
          <div>
            <div className="text-green-700">First Name</div>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <div className="text-green-700">Last Name</div>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <div className="text-green-700">Username</div>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <div className="text-green-700">Email</div>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <div className="text-green-700">Phone Number</div>
            <input
              type="tel"
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <div className="text-green-700">Country</div>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <div className="text-green-700">Password</div>
            <input
              type="password"
              className="w-full mt-1 p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" required />
            <div className="text-sm text-gray-700">
              I agree to the{" "}
              <Link to="/termsandconditions" className="text-green-600">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" required />
            <div className="text-sm text-gray-700">
              I have made sure I have read the {''}
              <Link to="/privacypolicy" className="text-green-600">
                Privacy Policy
              </Link>{" "}
             
            </div>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded font-semibold">
            Sign Up
          </button>
          <div className="text-sm text-center text-gray-600">
            An OTP will be sent to your email or phone after registration.
          </div>
          <div className="text-sm text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-green-700 font-semibold">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
