import { Facebook, Instagram } from "lucide-react";
import React from "react";

const MainFooter = () => {
  return (
    <footer className="bg-[#e2dede] py-8 px-4">
      <div className="container mx-auto">
        {/* Shop Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Shop</h3>
            <ul className="space-y-2 text-center">
              <li className="">
                <a href="#">Men</a>
              </li>
              <li className="">
                <a href="#">Kids</a>
              </li>
              <li className="">
                <a href="#">Collection</a>
              </li>
              <li className="">
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Quick Links</h3>
            <ul className="space-y-2 text-center">
              <li className="">
                <a href="#">Our story</a>
              </li>
              <li className="">
                <a href="#">Contact Us</a>
              </li>
              <li className="">
                <a href="#">Bulk Enquiry</a>
              </li>
              <li className="">
                <a href="#">Blogs</a>
              </li>
              <li className="">
                <a href="#">FAQs</a>
              </li>
              <li className="">
                <a href="#">Sitemap</a>
              </li>
              <li className="">
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">
              Customer Service
            </h3>
            <ul className="space-y-2 text-center">
              <li className="">
                <a href="#">Exchange Policy</a>
              </li>
              <li className="">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="">
                <a href="#">Terms Of Use</a>
              </li>
            </ul>
          </div>

          {/* My Profile */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">My Profile</h3>
            <ul className="space-y-2 text-center">
              <li className="">
                <a href="#">My Account</a>
              </li>
              <li className="">
                <a href="#">Track Order</a>
              </li>
              <li className="">
                <a href="#">My Cart</a>
              </li>
              <li className="">
                <a href="#">Wishlist</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="mt-8 flex items-center justify-between border-t pt-6">
          <div className="flex gap-4">
            <a href="#" className="text-2xl text-blue-600">
              <Facebook />
            </a>
            <a href="#" className="text-2xl text-pink-500">
              <Instagram />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            ©1881 Mohanlal Sons. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
