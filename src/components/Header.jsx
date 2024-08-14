import React from "react";
import logo from "../assets/images/logo.png";
import { IoLogoYoutube } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-[180px] cursor-pointer"
        src={logo}
        alt="logo"
      />
      <ul className="flex gap-4 md:gap-14">
        <li
          className="cursor-pointer hover:font-bold"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:font-bold"
          onClick={() => navigate("/about")}
        >
          About us
        </li>
        <li
          className="cursor-pointer hover:font-bold"
          onClick={() => navigate("/contact")}
        >
          Contact us
        </li>
      </ul>
      <button className="flex items-center rounded-full bg-red-500 text-white">
        Subscribe <LuBellRing className="ml-3 text-[20px]" />
      </button>
    </div>
  );
}

export default Header;
