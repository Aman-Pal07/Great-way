import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  X,
  Menu,
  Contact,
} from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Track Orders", path: "/track-order" },
  { name: "Occasion", path: "/" },
  { name: "Men", path: "/" },
  { name: "Accessories", path: "/" },
  { name: "Sale", path: "/", isSpecial: true },
  { name: "Shop", path: "/" },
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchRef = useRef(null);

  // Close the search bar when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="py-4 px-6 md:px-8 border-b">
        <div className="flex justify-between items-center">
          {/* Left: Brand Section */}
          <div className="text-center">
            <Link to="/">
              <h1 className="text-[22px] font-serif tracking-wide uppercase">
                Great Way Studio
              </h1>
              <div className="text-gray-500">
                <span className="block text-[10px] uppercase tracking-wider">
                  Since 1998
                </span>
                <span className="block text-[15px] tracking-widest mt-0.5">
                  India's Oldest Retailer
                </span>
              </div>
            </Link>
          </div>
          {/* Center: Navigation Links (Hidden on mobile) */}
          <nav className="hidden md:flex flex-1 justify-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`text-[12px] uppercase font-medium relative group ${
                  link.isSpecial ? "text-red-600" : "text-gray-600"
                }`}
                onClick={() => link.name === "Shop" && setIsSearchOpen(true)}
              >
                {link.name}
                <span
                  className={`absolute bottom-[-2px] left-0 w-full h-[2px] scale-x-0 origin-right transition-transform duration-300 ${
                    link.isSpecial ? "bg-red-600" : "bg-gray-600"
                  } group-hover:scale-x-100 group-hover:origin-left`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Right: Icons Section */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative">
              {/* Search Bar */}
              <div
                ref={searchRef}
                className={`fixed top-0 left-0 right-0 bg-white shadow-lg p-4 border rounded-md transition-transform duration-500 ease-in-out transform ${
                  isSearchOpen ? "translate-y-0" : "-translate-y-full"
                } z-50`}
              >
                <div className="flex items-center gap-2 relative">
                  {/* Search Icon */}
                  <Search size={20} className="text-gray-400 absolute left-3" />

                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />

                  {/* Close Icon */}
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Other Icons */}
            <Link
              to="/login"
              aria-label="Sign In"
              className="flex items-center gap-1 hover:text-gray-600"
            >
              <User size={20} />
              <span className="text-xs hidden md:inline">Sign In</span>
            </Link>
            <Link
              to="/contact-us"
              aria-label="Contact Us"
              className="flex items-center gap-1 hover:text-gray-600"
            >
              <Contact size={20} />
              <span className="text-xs hidden md:inline">Contact Us</span>
            </Link>
            <Link
              to="/"
              aria-label="Wishlist"
              className="flex items-center gap-1 hover:text-gray-600"
            >
              <Heart size={20} />
              <span className="text-xs hidden md:inline">Wishlist</span>
            </Link>
            <Link
              to="/"
              aria-label="Shopping Bag"
              className="flex items-center gap-1 hover:text-gray-600"
            >
              <ShoppingBag size={20} />
              <span className="text-xs hidden md:inline">Bag</span>
            </Link>
          </div>

          {/* Mobile Menu Icon: Positioned on the far right */}
          <div className="block md:hidden ml-3 mt-2 ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu: Show when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`text-lg uppercase font-medium ${
                  link.isSpecial ? "text-red-600" : "text-gray-600"
                }`}
                onClick={() => link.name === "Shop" && setIsSearchOpen(true)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
