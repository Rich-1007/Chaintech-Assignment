import React from "react";
import { NavLink } from "react-router-dom"; // Importing NavLink from react-router-dom for navigation

const NavBar = () => {
  return (
    <>
      <div className="bg-white lg:px-20 px-2 shadow-lg w-full h-12 flex justify-end gap-4 items-center">
        {/* Navigation bar container with styling for background, padding, shadow, etc. */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? "text-orange-700 font-bold" : "text-gray-500"
            }`
          }
        >
          {/* NavLink component for the Login page */}
          <span className="cursor-pointer text-sm   ">Login</span>
        </NavLink>
        <NavLink
          to="/registration"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? "text-orange-700 font-bold" : "text-gray-500"
            }`
          }
        >
          <span className="cursor-pointer text-sm   ">Register</span>
        </NavLink>
        <NavLink
          to="/editprofile"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? "text-orange-700 font-bold" : "text-gray-500"
            }`
          }
        >
          {/* Styles change based on whether the link is active */}
          <span className="cursor-pointer text-sm  font-semibold ">
            My Account
          </span>
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
