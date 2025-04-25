// components/Footer.tsx
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#060097] text-white px-6 py-16">
      <div className="container mx-auto px-20 md:px-0 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-widest relative">
            About Us
            <span className="block text-white text-xl leading-none">··</span>
          </h3>
          <p className="mt-4 text-lg leading-relaxed w-64 md:text-sm lg:text-lg">
            Sri Lanka Association for the Advancement of Quality and Productivity
          </p>
          <p className="mt-4 text-lg text-white md:text-sm lg:text-lg">
            (c) 2024 All Rights Reserved. <br />
            Powered by SLAAQP IT
          </p>
        </div>

        {/* Menu Section */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-widest relative">
            Menu
            <span className="block text-white text-xl leading-none">···</span>
          </h3>
          <ul className="mt-4 space-y-3 text-lg">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Help & Support</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-lg font-semibold uppercase tracking-widest relative">
            Social
            <span className="block text-white text-xl leading-none">···</span>
          </h3>
          <div className="flex items-center gap-3 mt-6">
            <a href="#" className="bg-gray-700 rounded-full p-2 hover:bg-yellow-400 transition-colors">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="bg-blue-800 rounded-full p-2 hover:bg-yellow-400 transition-colors">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="bg-sky-500 rounded-full p-2 hover:bg-yellow-400 transition-colors">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="bg-blue-600 rounded-full p-2 hover:bg-yellow-400 transition-colors">
              <FaLinkedinIn className="text-white" />
            </a>
            <a href="#" className="bg-pink-500 rounded-full p-2 hover:bg-yellow-400 transition-colors">
              <FaGlobe className="text-white" />
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
