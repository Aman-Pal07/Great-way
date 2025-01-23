import { Facebook, Instagram } from "lucide-react";
import React from "react";

const MainFooter = () => {
  return (
    <footer className="bg-[#e2dede] py-8 px-4">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-x-16">
          {/* Footer Links (Shifted to the Left) */}
          <div className="flex-grow">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {/* Shop Section */}
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Shop</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#">Men</a>
                  </li>
                  <li>
                    <a href="#">Kids</a>
                  </li>
                  <li>
                    <a href="#">Collection</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#">Our story</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Bulk Enquiry</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                </ul>
              </div>

              {/* Customer Service */}
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Customer Service</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#">Exchange Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms Of Use</a>
                  </li>
                </ul>
              </div>

              {/* My Profile */}
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">My Profile</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Track Order</a>
                  </li>
                  <li>
                    <a href="#">My Cart</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Logo Section (Shifted to the Right with Gap) */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="text-center">
              <a href="/">
                <h1 className="text-3xl font-serif tracking-wide uppercase">
                  Great Way Studio
                </h1>
                <div className="text-gray-500">
                  <span className="block text-[13px] uppercase tracking-wider">
                    Since 1998
                  </span>
                  <span className="block text-xl tracking-widest mt-0.5">
                    India's Oldest Retailer
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="mt-8 flex items-center justify-between border-t pt-6">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-2xl text-blue-600">
              <Facebook />
            </a>
            <a href="#" className="text-2xl text-pink-500">
              <Instagram />
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-sm text-gray-500">
            Â©1881 Great Way Studio Sons. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
