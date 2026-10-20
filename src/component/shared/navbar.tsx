import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    
    <div className="navbar bg-[#0d0e10] text-white px-6 md:px-8 min-h-[90px] 
    border-b border-gray-800 ">
      
      {/* Left: Logo */}
      <div className="navbar-start">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Fitlog Logo"
            className="h-10 w-10 object-contain"
          />

          <span className="text-xl font-bold tracking-wide">
            FITLOG
          </span>
        </div>
      </div>

      {/* Center: Navigation */}
      <div className="navbar-center hidden md:flex">
        <ul className="flex items-center gap-2">

          <li>
            <a className="rounded-full bg-[#222c0b] px-5 py-2 text-sm font-medium text-[#b8f531] hover:bg-[#303c13] transition">
              Workouts
            </a>
          </li>

          <li>
            <a className="rounded-full px-5 py-2 text-sm text-gray-300 hover:text-white transition">
              My Plan
            </a>
          </li>

        </ul>
      </div>

      {/* Right: Plan & Saved */}
      <div className="navbar-end gap-5">

        <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
          <span>Plan</span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#b8f531] text-xs font-bold text-black">
            0
          </span>
        </button>

        <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
          <span>Saved</span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700 text-xs text-gray-400">
            0
          </span>
        </button>

      </div>

    </div>
  );
};

export default Navbar;