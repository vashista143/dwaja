import React from "react";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const Footer = () => {
const footerSections = [
  {
    title: "OUR SERVICES",
    links: [
      "Election Campaign Management",
      "Political Strategy",
      "Voter Outreach",
      "Social Media Management",
      "Political Advertising",
      "PR & Media Relations",
      "Reputation Management",
      "Survey & Research",
    ],
  },
  {
    title: "OUR WORK",
    links: [
      "Personal Branding",
      "Social Media Growth",
      "Content Creation",
      "Reels & Video Production",
      "PR & Media Coverage",
      "Sponsorship & Brand Deals",
      "Reputation Management",
      "Portfolio Websites",
    ],
  },
  {
    title: "BUSINESS SOLUTIONS",
    links: [
      "Social Media Marketing",
      "E-commerce Website Development & SEO",
      "Google Business Profile Setup",
      "Google Maps Listing ",
      "Meta & Google Ads",
      "Lead Generation",
      "Branding & Graphic Design",
      "Email & WhatsApp Marketing",
    ],
  },
];
  return (
    <footer className="bg-black text-white py-10">
  <div className="max-w-7xl mx-auto px-6">

    {/* Mobile Layout */}
    <div className="lg:hidden">

      {/* Logo */}
      <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
          <img
            src="/logo.png"
            alt="Dhwaja Flare"
            className="h-20 mb-4"
          />
          <div className="flex flex-col font-bold text-white text-lg">
            <p>DHWAJA</p>
            <p>FLARE</p>
          </div>
          </div>

          <p className="text-gray-400 text-sm leading-6">
            Dhwaja Flare is a political consulting and public
            affairs enhancement brand specializing in campaigns,
            influencer growth, and digital transformation.
          </p>
        </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-8">
               {/* Political Consulting */}
        <div>
          <h3 className="font-bold text-sm mb-4">
            OUR SERVICES
          </h3>

          <ul className="space-y-2">
            {footerSections[0].links.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs text-gray-300"
              >
                <ChevronRight size={14} className="mt-1 text-[#D00000]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Influencer Management */}
        <div>
          <h3 className="font-bold text-sm mb-4">
            Influencer & Personal Brand Management
          </h3>

          <ul className="space-y-2">
            {footerSections[1].links.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs text-gray-300"
              >
                <ChevronRight size={14} className="mt-1 text-red-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Business Solutions */}
        <div>
          <h3 className="font-bold text-sm mb-4">
            BUSINESS SOLUTIONS
          </h3>

          <ul className="space-y-2">
            {footerSections[2].links.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs text-gray-300"
              >
                <ChevronRight size={14} className="mt-1 text-red-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-sm mb-4">
            CONTACT US
          </h3>

          <div className="space-y-4 text-gray-300 text-xs">
            <div className="flex gap-3">
              <MapPin className="text-red-600 shrink-0" size={18} />
              <p>
                address:
              </p>
            </div>

            <div className="flex gap-3">
              <Mail className="text-red-600 shrink-0" size={18} />
              <p>info@dhwajaflare.com</p>
            </div>

            <div className="flex gap-3">
              <Phone className="text-red-600 shrink-0" size={18} />
              <p>+91 93561 06000</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Desktop Layout */}
    <div className="hidden lg:grid lg:grid-cols-5 gap-8">

      <div>
          <div className="flex items-center gap-2 mb-4">
          <img
            src="/logo.png"
            alt="Dhwaja Flare"
            className="h-20 mb-4"
          />
          <div className="flex flex-col font-bold text-white text-lg">
            <p>DHWAJA</p>
            <p>FLARE</p>
          </div>
          </div>

          <p className="text-gray-400 text-sm leading-6">
            Dhwaja Flare is a political consulting and public
            affairs enhancement brand specializing in campaigns,
            influencer growth, and digital transformation.
          </p>
        </div>

      {/* Services */}
      <div>
          <h3 className="font-bold text-lg mb-4">
            OUR SERVICES
          </h3>

          <ul className="space-y-2">
            {footerSections[0].links.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-300"
              >
                <ChevronRight size={14} className="mt-1 text-[#D00000]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      {/* Influencer */}
      <div>
          <h3 className="font-bold text-lg mb-4">
            Influencer & Personal Brand Management
          </h3>

          <ul className="space-y-2">
            {footerSections[1].links.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-300"
              >
                <ChevronRight size={14} className="mt-1 text-red-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      {/* Business */}
      <div>
          <h3 className="font-bold text-lg mb-4">
            BUSINESS SOLUTIONS
          </h3>

          <ul className="space-y-2">
            {footerSections[2].links.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-300"
              >
                <ChevronRight size={14} className="mt-1 text-red-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      {/* Contact */}
      <div>
          <h3 className="font-bold text-lg mb-4">
            CONTACT US
          </h3>

          <div className="space-y-4 text-gray-300 text-sm">
            <div className="flex gap-3">
              <MapPin className="text-red-600 shrink-0" size={18} />
              <p>
                address:
              </p>
            </div>

            <div className="flex gap-3">
              <Mail className="text-red-600 shrink-0" size={18} />
              <p>info@dhwajaflare.com</p>
            </div>

            <div className="flex gap-3">
              <Phone className="text-red-600 shrink-0" size={18} />
              <p>+91 93561 06000</p>
            </div>
          </div>
        </div>

    </div>

  </div>
</footer>
  );
};

export default Footer;