import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { TiSocialPinterest } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";

const socialLinks = [
  { icon: <FaFacebookF />, label: "Facebook", color: "text-black" },
  { icon: <FaXTwitter />, label: "Twitter", color: "text-black" },
  { icon: <TiSocialPinterest />, label: "Pinterest", color: "textblack" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", color: "text-black" },
  { icon: <FaInstagram />, label: "Instagram", color: "text-black" },
  { icon: <FaYoutube />, label: "YouTube", color: "text-black" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 ">
          {/* Company Description */}
          <div>
            <img
              src="/Images/FascaveLogo.png"
              alt="FasCave Logo"
              className="mt-[-4vh] w-36  mb-[-3vh] "
            />
            <p className="text-sm leading-relaxed ">
              Best Software Company in Pune-Amravati-India | Website Development
              | App Development | Digital Marketing | WhatsApp Business API |
              Cloud Data Analytics | Power & BI Visualization | FasCave IT
              Solutions
            </p>
            <div className="flex space-x-3 mt-4">
              {socialLinks.map(({ icon, label, color }, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={label}
                  className={`bg-white ${color} rounded-full p-3 shadow-md hover:bg-gray-200 transition`}
                >
                  <i className="w-5 h-5">{icon}</i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Web Development",
                "Mobile App Development",
                "Digital Marketing",
                "WhatsApp Business API",
                "Cloud Data Analytics",
                "Power & BI Visualization",
              ].map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <p className="flex items-start gap-2">
                <GrMapLocation className="text-blue-400 w-10 h-6 mt-1" />
                FasCave IT Solutions Private Limited First Floor, Govind Complex
                B, 127, Pote Patil Rd, Amravati, Maharashtra 44460
              </p>
              <p className="flex items-center gap-2">
                <FiPhoneCall className="text-blue-400 w-6 h-6" />
                +91 9209755990
              </p>
              <p className="flex items-center gap-2">
                <CiMail className="text-blue-400 w-6 h-6" />
                support@fascave.com
              </p>
            </div>
          </div>

          {/* Proud Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Proud Partners</h3>
            <div className="bg-purple-100 p-4 rounded-md">
              <img
                src="/path-to-microsoft-logo.png"
                alt="Microsoft for Startups"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 All Rights Reserved By FasCave IT Solutions Pvt. Ltd.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Home", "Careers", "About", "Contact Us"].map((link, index) => (
              <a
                key={index}
                href="#"
                className="hover:underline hover:text-blue-500"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
