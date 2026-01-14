import React, { useState } from "react";
import { FaServer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="py-40 bg-white">
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-xl mx-auto shadow p-12">
          <div
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 mb-12 mx-auto cursor-pointer"
          >
            <FaServer className="text-primary text-2xl" />
            <span className="text-3xl text-dark font-bold">ElitHosting</span>
          </div>

          <h1 className="text-3xl text-dark font-bold text-center">
            {isLogin ? "Sign In" : "Sign Up"}
          </h1>

          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="" className="block mb-2 text-dark/80 font-bold">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-6 py-2 border border-primary outline-none placeholder:text-sm placeholder:text-dark/50"
                placeholder="Enter name"
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-dark/80 font-bold">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-6 py-2 border border-primary outline-none placeholder:text-sm placeholder:text-dark/50"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-dark/80 font-bold">
              Enter Password
            </label>
            <input
              type="password"
              className="w-full px-6 py-2 border border-primary outline-none placeholder:text-sm placeholder:text-dark/50"
              placeholder="Enter password"
            />
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="" className="block mb-2 text-dark/80 font-bold">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-6 py-2 border border-primary outline-none placeholder:text-sm placeholder:text-dark/50"
                placeholder="Confirm password"
              />
            </div>
          )}

          {!isLogin && (
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <p className="text-dark font-bold">
                  I read and accept all{" "}
                  <a className="text-primary hover:underline" href="#">
                    terms of use..
                  </a>
                </p>
              </div>
            </div>
          )}

          {isLogin && (
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="">Remember Me</span>
              </div>

              <a
                href="#"
                className="text-primary hover:underline font-semibold"
              >
                Forget Password?
              </a>
            </div>
          )}

          <button className="w-full bg-primary py-2.5 text-white font-semibold rounded cursor-pointer">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
          <p className="text-dark font-semibold text-center mt-2">
            {isLogin ? "Have no account yet?" : "You already have an account?"}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-bold hover:underline cursor-pointer ml-2"
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
