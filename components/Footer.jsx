"use client";

import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  const navigationLinks = [
    "Our Team",
    "Career",
    "About Us",
    "Testimonial",
    "FAQs",
  ];
  const contactDetails = [
    "(000) 000-0000",
    "example@gmail.com",
    "2464 Royal Ln. Mesa, New Jersey 45463",
  ];
  const socialIcons = [
    { icon: <FaFacebookF />, id: "facebook" },
    { icon: <FaPinterestP />, id: "pinterest" },
    { icon: <FaInstagram />, id: "instagram" },
    { icon: <FaYoutube />, id: "youtube" },
  ];

  return (
    <footer className="bg-[#0D1224] text-white px-6 md:px-16 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          Let’s <span className="text-blue-500">Connect</span> there
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full mt-4 md:mt-0">
          Contact Us
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <img
                src="/images/final.png"
                className="w-8 h-8 object-cover"
                alt="logo"
              />
            </div>
            <h2 className="text-lg font-semibold">IT Company.</h2>
          </div>
          <p className="text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {socialIcons.map(({ icon, id }) => (
              <span
                key={id}
                className="text-gray-300 text-2xl hover:text-blue-500 cursor-pointer bg-blue-700 rounded-full p-2"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Navigation</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            {navigationLinks.map((link, index) => (
              <li key={index} className="hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            {contactDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Get the latest information</h3>
          <div className="mt-3 flex items-center bg-gray-800 rounded-full p-1">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent flex-1 px-3 py-2 focus:outline-none text-gray-300"
            />
            <button className="bg-blue-600 p-3 rounded-full">
              <FiSend className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm border-t border-gray-700 pt-4">
        <p>Copyright © 2025 IT Companyo. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            User Terms & Conditions
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
