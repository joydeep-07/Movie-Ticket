import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { MenuIcon, Search, TicketPlus, XIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 ">
      {/* Logo */}
      <Link to="/" className="z-50">
        <img src={assets.logo} className="w-36 h-auto" alt="logo" />
      </Link>

      {/* Nav Links */}
      <div
        className={`fixed md:static top-0 left-0 h-screen md:h-auto w-full md:w-auto z-60
        flex flex-col md:flex-row items-center justify-center gap-8
        bg-black/90 md:bg-white/10 backdrop-blur-xl
        md:rounded-full md:px-8 md:py-3 md:border border-white/15
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Close icon (mobile only) */}
        <XIcon
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-6 right-6 w-7 h-7 cursor-pointer"
        />

        <Link onClick={handleLinkClick} to="/">
          Home
        </Link>
        <Link onClick={handleLinkClick} to="/movies">
          Movies
        </Link>
        <Link onClick={handleLinkClick} to="/">
          Theaters
        </Link>
        <Link onClick={handleLinkClick} to="/">
          Releases
        </Link>
        <Link onClick={handleLinkClick} to="/favourite">
          Favourite
        </Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-5 z-50">
        <Search className="hidden md:block w-6 h-6 cursor-pointer" />
        {user ? (
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/my-bookings")}
              className="flex text-sm items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <TicketPlus size={16} />
              My Bookings
            </button>

            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <button
            onClick={openSignIn}
            className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium"
          >
            Login
          </button>
        )}

        {/* Hamburger */}
        <MenuIcon
          onClick={() => setIsOpen(true)}
          className={`md:hidden w-8 h-8 cursor-pointer transition-opacity duration-300 ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
};

export default Navbar;
