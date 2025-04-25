// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import Image from "next/image";
// import slaaqpLogo from "/public/slaaqpLogo.jpg";

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   const handleMouseEnter = (menu: string) => {
//     setOpenDropdown(menu);
//   };

//   const handleMouseLeave = () => {
//     setOpenDropdown(null);
//   };

//   return (
//     <nav className="relative z-50 bg-gradient-to-r from-indigo-900 to-blue-600 text-white py-[28px]">
//       <div className="container mx-auto flex justify-between items-center px-10">
//         {/* Logo and Site Name */}
//         <div className="flex items-center space-x-2 gap-2">
//           <Image
//             src={slaaqpLogo}
//             alt="slaaqp logo"
//             className="w-[72px] h-[63px]"
//           />
//           <a href="/">
//             <span className="text-xl font-bold hover:text-gray-300 cursor-pointer transition-all duration-300">
//               SLAAQP
//             </span>
//           </a>
//         </div>

//         <div className="flex gap-4">
//           {/* Navigation Links */}
//           <ul className="hidden md:flex space-x-10 items-center">
//             <li>
//               <Link href="/" className="hover:text-gray-300">
//                 Home
//               </Link>
//             </li>

//             {/* About Us Dropdown */}
//             <li
//               className="relative"
//               onMouseEnter={() => handleMouseEnter("about")}
//               onMouseLeave={handleMouseLeave}
//             >
//               <a href="/about-us">
//                 <button
//                   className={`px-4 py-2 ${
//                     openDropdown === "about" ? "bg-red-600" : ""
//                   }`}
//                 >
//                   About Us ▾
//                 </button>
//               </a>
//               {openDropdown === "about" && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -5 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -5 }}
//                   className="absolute left-0 top-full w-[200px] bg-blue-900 text-white shadow-lg border border-gray-400 z-50"
//                 >
//                   <li className="px-4 py-3 border-b border-gray-500 hover:bg-red-600">
//                     <Link href="/council-members">Council Members</Link>
//                   </li>
//                   <li className="px-4 py-3 border-b border-gray-500 hover:bg-red-600">
//                     <Link href="/privacy-policy">Privacy Policy</Link>
//                   </li>
//                   <li className="px-4 py-3 border-b border-gray-500 hover:bg-red-600">
//                     <Link href="/memberships">Memberships</Link>
//                   </li>
//                   <li className="px-4 py-3 hover:bg-red-600">
//                     <Link href="/publications">Publications</Link>
//                   </li>
//                 </motion.ul>
//               )}
//             </li>

//             <li>
//               <Link href="/contact-us" className="hover:text-gray-300">
//                 Contact Us
//               </Link>
//             </li>

//             {/* ICQCC 2024 Dropdown */}
//             <li
//               className="relative"
//               onMouseEnter={() => handleMouseEnter("icqcc")}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button
//                 className={`px-4 py-2 ${
//                   openDropdown === "icqcc" ? "bg-red-600" : ""
//                 }`}
//               >
//                 ICQCC 2024 ▾
//               </button>
//               {openDropdown === "icqcc" && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -5 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -5 }}
//                   className="absolute left-0 top-full w-[200px] bg-blue-900 text-white shadow-lg border border-gray-400 z-50"
//                 >
//                   <li className="px-4 py-3 border-b border-gray-500 hover:bg-red-600">
//                     <Link href="/icqcc-images">ICQCC 2024 - Images</Link>
//                   </li>
//                   <li className="px-4 py-3 hover:bg-red-600">
//                     <Link href="/icqcc-2024-business">Business Forum</Link>
//                   </li>
//                   <li className="px-4 py-3 hover:bg-red-600">
//                     <Link href="/icqcc-2024-research-conference">
//                       Research Conference
//                     </Link>
//                   </li>
//                 </motion.ul>
//               )}
//             </li>

//             <li>
//               <Link href="/ncqp-2024" className="hover:text-gray-300">
//                 NCQP 2025
//               </Link>
//             </li>

//             {/* Programs Dropdown */}
//             <li
//               className="relative"
//               onMouseEnter={() => handleMouseEnter("programs")}
//               onMouseLeave={handleMouseLeave}
//             >
//               <a href="/programs">
//                 <button
//                   className={`px-4 py-2 ${
//                     openDropdown === "programs" ? "bg-red-600" : ""
//                   }`}
//                 >
//                   Programs ▾
//                 </button>
//               </a>
//               {openDropdown === "programs" && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -5 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -5 }}
//                   className="absolute left-0 top-full w-[200px] bg-blue-900 text-white shadow-lg border border-gray-400 z-50"
//                 >
//                   <li className="px-4 py-3 border-b border-gray-500 hover:bg-red-600">
//                     <Link href="/tqm-award-2023">TQM Award 23</Link>
//                   </li>
//                   <li className="px-4 py-3 hover:bg-red-600">
//                     <Link href="/green-productivity-awards-2022">GP Awards 2022</Link>
//                   </li>
//                 </motion.ul>
//               )}
//             </li>
//           </ul>

//           {/* Social Icons */}
//           <div className="flex space-x-4 text-xl">
//             <Link
//               href="https://slaaqp.org/green-productivity-awards-2022/#"
//               target="_blank"
//               className="hover:text-gray-300"
//             >
//               <FaInstagram />
//             </Link>
//             <Link
//               href="https://slaaqp.org/green-productivity-awards-2022/#"
//               target="_blank"
//               className="hover:text-gray-300"
//             >
//               <FaFacebookF />
//             </Link>
//             <Link
//               href="https://slaaqp.org/green-productivity-awards-2022/"
//               target="_blank"
//               className="hover:text-gray-300"
//             >
//               <FaLinkedinIn />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import slaaqpLogo from "../../../images/slaaqpLogo.jpg";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu: string) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative z-50 bg-gradient-to-r from-indigo-900 to-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src={slaaqpLogo} alt="SLAQPP Logo" className="w-14 h-14" />
          <Link href="/" className="text-xl font-bold hover:text-gray-300">
            SLAAQP
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-10 items-center">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/about-us">
              <button
                className={`px-4 py-2 ${
                  openDropdown === "about" ? "bg-red-600" : ""
                }`}
              >
                About Us ▾
              </button>
            </a>
            {openDropdown === "about" && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full w-[200px] bg-blue-900 shadow-lg border border-gray-400 z-50"
              >
                <li className="px-4 py-3 hover:bg-red-600 border-b border-gray-500">
                  <Link href="/council-members">Council Members</Link>
                </li>
                <li className="px-4 py-3 hover:bg-red-600 border-b border-gray-500">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="px-4 py-3 hover:bg-red-600 border-b border-gray-500">
                  <Link href="/memberships">Memberships</Link>
                </li>
                <li className="px-4 py-3 hover:bg-red-600">
                  <Link href="/publications">Publications</Link>
                </li>
              </motion.ul>
            )}
          </li>

          <li>
            <Link href="/contact-us" className="hover:text-gray-300">
              Contact Us
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("icqcc")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`px-4 py-2 ${
                openDropdown === "icqcc" ? "bg-red-600" : ""
              }`}
            >
              ICQCC 2024 ▾
            </button>
            {openDropdown === "icqcc" && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full w-[200px] bg-blue-900 shadow-lg border border-gray-400 z-50"
              >
                <li className="px-4 py-3 hover:bg-red-600 border-b border-gray-500">
                  <Link href="/icqcc-images">ICQCC 2024 - Images</Link>
                </li>
                <li className="px-4 py-3 hover:bg-red-600">
                  <Link href="/icqcc-2024-business">Business Forum</Link>
                </li>
                <li className="px-4 py-3 hover:bg-red-600">
                  <Link href="/icqcc-2024-research-conference">
                    Research Conference
                  </Link>
                </li>
              </motion.ul>
            )}
          </li>

          <li>
            <Link href="/ncqp-2024" className="hover:text-gray-300">
              NCQP 2025
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("programs")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/programs">
              <button
                className={`px-4 py-2 ${
                  openDropdown === "programs" ? "bg-red-600" : ""
                }`}
              >
                Programs ▾
              </button>
            </a>
            {openDropdown === "programs" && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 top-full w-[200px] bg-blue-900 shadow-lg border border-gray-400 z-50"
              >
                <li className="px-4 py-3 hover:bg-red-600 border-b border-gray-500">
                  <Link href="/tqm-award-2023">TQM Award 23</Link>
                </li>
                <li className="px-4 py-3 hover:bg-red-600">
                  <Link href="/green-productivity-awards-2022">
                    GP Awards 2022
                  </Link>
                </li>
              </motion.ul>
            )}
          </li>
        </ul>

                    {/* Social Icons */}
                    <div className="flex justify-start space-x-4 pt-2 text-lg">
              <Link
                href="https://slaaqp.org/green-productivity-awards-2022/#"
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://slaaqp.org/green-productivity-awards-2022/#"
                target="_blank"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://slaaqp.org/green-productivity-awards-2022/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-blue-900 text-white px-6 py-4 space-y-4"
          >
            <Link href="/" className="block hover:text-gray-300">
              Home
            </Link>
            <Link href="/about-us" className="block hover:text-gray-300">
              About Us
            </Link>
            <Link href="/contact-us" className="block hover:text-gray-300">
              Contact Us
            </Link>
            <Link href="/icqcc-images" className="block hover:text-gray-300">
              ICQCC 2024
            </Link>
            <Link href="/ncqp-2024" className="block hover:text-gray-300">
              NCQP 2025
            </Link>
            <Link href="/programs" className="block hover:text-gray-300">
              Programs
            </Link>

            {/* Social Icons */}
            <div className="flex justify-start space-x-4 pt-2 text-lg">
              <Link
                href="https://slaaqp.org/green-productivity-awards-2022/#"
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://slaaqp.org/green-productivity-awards-2022/#"
                target="_blank"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://slaaqp.org/green-productivity-awards-2022/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
