import React from "react";
import { NavLink } from "react-router-dom";
import fasCaveLogo from "../../Asset/imagesWeb/FasCave_Logo.png";

export default function Navbar() {
  return (
    <div className="w-11/12 m-auto mt-3 flex justify-between items-center h-16 bg-white text-black relative shadow-md font-sans rounded-lg px-8">
      <NavLink to="/" className="flex items-center">
        <img src={fasCaveLogo} alt="fasCaveLogo" className="h-10" />
      </NavLink>

      <div className="flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-950 font-semibold text-base underline hover:text-blue-700"
              : "text-black font-medium text-base hover:text-blue-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Portfolio"
          className={({ isActive }) =>
            isActive
              ? "text-blue-950 font-semibold text-base underline hover:text-blue-700"
              : "text-black font-medium text-base hover:text-blue-700"
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/Services"
          className={({ isActive }) =>
            isActive
              ? "text-blue-950 font-semibold text-base underline hover:text-blue-700"
              : "text-black font-medium text-base hover:text-blue-700"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/About_Us"
          className={({ isActive }) =>
            isActive
              ? "text-blue-950 font-semibold text-base underline hover:text-blue-700"
              : "text-black font-medium text-base hover:text-blue-700"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/Articles"
          className={({ isActive }) =>
            isActive
              ? "text-blue-950 font-semibold text-base underline hover:text-blue-700"
              : "text-black font-medium text-base hover:text-blue-700"
          }
        >
          Articles
        </NavLink>
        <NavLink
          to="/Contact_Us"
          className={({ isActive }) =>
            isActive
              ? "text-blue-950 font-semibold text-base underline hover:text-blue-700"
              : "text-black font-medium text-base hover:text-blue-700"
          }
        >
          Contact Us
        </NavLink>
      </div>

      
      <NavLink to="/consultation" className="ml-4">
        <button className="bg-blue-950 hover:bg-blue-800 text-white font-semibold text-sm py-2 px-6 rounded-full shadow">
          Book a Free Consultation
        </button>
      </NavLink>
    </div>
  );
}
