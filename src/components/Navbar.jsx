import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import StaggeredMenu from "./StaggeredMenu";
import React, { useState, useRef } from "react";
const Navbar = () => {
const [showServices, setShowServices] = useState(false);
const timeoutRef = useRef(null);

const handleMouseEnter = () => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }
  setShowServices(true);
};

const handleMouseLeave = () => {
  timeoutRef.current = setTimeout(() => {
    setShowServices(false);
  }, 500); // 2 seconds delay
};  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-[#D00000] font-semibold"
        : "text-gray-800 hover:text-[#D00000]"
    }`;
      const menuItems = [
    {
      label: "Home",
      ariaLabel: "Go to home page",
      link: "/",
    },
    {
      label: "About Us",
      ariaLabel: "Learn about us",
      link: "/about-us",
    },
    {
      label: "Services",
      ariaLabel: "View our services",
      link: "/services",
    },
    {
      label: "Our Sends",
      ariaLabel: "View our works",
      link: "/our-sends",
    },
    {
      label: "Contact Us",
      ariaLabel: "Get in touch",
      link: "/contact-us",
    },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 md:px-6 h-12 md:h-20 flex items-center justify-between">
        
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1 ">
          <img
            src="/logo.png"
            alt="DHWAJA FLARE"
            className="h-10 md:h-15"
          />
          <div
      className="flex flex-col font-bold text-black text-sm md:text-lg font-new-tegomin"
      // style={{ fontFamily: "Google Sans" }}
    >
            <p>DHWAJA</p>
            <p>FLARE</p>
          </div>
          </div>


        </NavLink>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-10 text-sm font-medium">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about-us" className={navLinkClass}>
              About us
            </NavLink>
          </li>

          <li
  className="relative"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <button
    onClick={() => setShowServices(!showServices)}
    className={`${navLinkClass({ isActive: false })} flex items-center gap-1`}
  >
    Services
    <ChevronDown
      size={14}
      className={`transition-transform duration-300 ${
        showServices ? "rotate-180" : ""
      }`}
    />
  </button>

  {showServices && (
    <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
      <li>
        <NavLink
          to="/services/political-services"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Political Services
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/brand-promotions"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Brand Promotions
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services/influencer-services"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Influencer Services
        </NavLink>
      </li>
    </ul>
  )}
</li>

          <li>
            <NavLink
              to="/our-sends"
              className={`${navLinkClass({ isActive: false })} flex items-center gap-1`}
            >
              Our sends
              <ChevronDown size={14} />
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact-us" className={navLinkClass}>
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="lg:hidden ml-auto">
    <StaggeredMenu
      position="right"
      items={menuItems}
      displaySocials={false}
      displayItemNumbering={true}
      menuButtonColor="#B00000"
      openMenuButtonColor="#B00000"
      changeMenuColorOnOpen={true}
      colors={["#D00000", "#000000"]}
      accentColor="#D00000"
    />
  </div>
        {/* CTA Button */}
        <button onClick={() => {
    if (window.location.pathname !== "/") {
      window.location.href = "/#contact-section";
    } else {
      document
        .getElementById("contact-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }}
   className="hidden lg:block bg-[#D00000] hover:bg-[#D00000] text-white text-sm font-medium px-6 py-3 rounded-md transition">
          GET A CONSULTATION
        </button>
      </div>
    </nav>
  );
};

export default Navbar;