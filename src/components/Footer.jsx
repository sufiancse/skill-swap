import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-gray-100 pt-16">
      <div className="container mx-auto px-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h6 className="text-xl font-bold mb-4">Services</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="link link-hover">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Advertisement
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-bold mb-4">Company</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="link link-hover">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-bold mb-4">Legal</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="link link-hover">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-bold mb-4">Contact</h6>
            <p className="mb-2">Email: support@skillswap.com</p>
            <p className="mb-4">Phone: +880 123 456 789</p>

            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="text-gray-100 hover:text-purple-400 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-blue-400 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-blue-600 transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-gray-400 transition"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12"></div>

        <div className="text-center py-6 text-gray-400 text-sm">
          © {new Date().getFullYear()} SkillSwap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
