import React, { useState } from "react";
import { FaBars, FaServer } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="bg-white w-full fixed z-50 shadow">
      <div className="flex items-center justify-between px-6 sm:px-12 md:px-24 py-8">
        {/* Menu Items */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <FaServer className="text-primary text-2xl" />
            <span className="text-2xl font-bold text-dark">ElitHosting</span>
          </div>

          <div className="hidden md:flex items-center space-x-6 font-semibold text-dark ml-6">
            <Link
              className={location.pathname === "/" ? "text-primary" : ""}
              to={"/"}
            >
              Home
            </Link>
            <Link
              className={location.pathname === "/hosting" ? "text-primary" : ""}
              to={"/hosting"}
            >
              Hosting
            </Link>
            <Link
              className={location.pathname === "/domain" ? "text-primary" : ""}
              to={"/domain"}
            >
              Domain
            </Link>
            <Link
              className={location.pathname === "/about" ? "text-primary" : ""}
              to={"/about"}
            >
              About
            </Link>
            <Link
              className={location.pathname === "/contact" ? "text-primary" : ""}
              to={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Auth Button */}
        {location.pathname !== "/auth" && (
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to={"/auth"}
              className="text-dark font-semibold rounded cursor-pointer"
            >
              Login
            </Link>
            <Link
              to={"/auth"}
              className="px-6 py-2.5 bg-primary text-white font-semibold rounded  cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        )}

        {/* Mobile Version */}

        <div className="md:hidden z-20">
          {showMenu ? (
            <FaBars
              className="text-dark text-2xl cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          ) : (
            <FaXmark
              className="text-dark text-2xl cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          )}
        </div>
      </div>

      {!showMenu && (
        <div className="md:hidden flex flex-col items-center justify-center space-y-6 font-semibold text-white fixed w-64 h-screen bg-primary top-0 right-0">
          <Link onClick={() => setShowMenu(!showMenu)} to={"/"}>
            Home
          </Link>
          <Link onClick={() => setShowMenu(!showMenu)} to={"/hosting"}>
            Hosting
          </Link>
          <Link onClick={() => setShowMenu(!showMenu)} to={"/domain"}>
            Domain
          </Link>
          <Link onClick={() => setShowMenu(!showMenu)} to={"/about"}>
            About
          </Link>
          <Link onClick={() => setShowMenu(!showMenu)} to={"/contact"}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
