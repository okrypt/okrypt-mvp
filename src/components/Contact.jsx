import React from "react";
import logo from "../assets/logos.svg";
import facebookIcon from "../assets/facebook .svg";
import instagramIcon from "../assets/instagram.svg";
import x from "../assets/x.svg";
import sendIcon from "../assets/send-fill.svg";

const Contact = () => {
  return (
    <div className="px-4 lg:px-14 py-16 w-full bg-primaryLight">
      <div className="max-w-[1259.56px] md:border-t-[1px] md:pt-10 border-accentColor1 md:flex gap-3 space-y-4 items-center md:justify-evenly block text-center md:text-left">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start items-center gap-8 md:mb-0">
          <a
            href="#"
            className="text-2xl p-4 font-semibold flex items-center justify-center space-x-3"
          >
            <img
              src={logo}
              alt="Logo"
              className="inline-block items-center w-[40px] h-[40px] p-2 bg-[#5F4FA1] border rounded-xl border-transparent"
            />{" "}
            <span className="text-white text-lg">Okrypt</span>
          </a>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="font-bold text-xl text-secondaryColor mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-accentColor1 font-light text-sm">
            <li>About</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="font-bold text-xl text-secondaryColor mb-4">Legal</h4>
          <ul className="space-y-2 text-accentColor1 font-light text-sm">
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-bold text-xl text-secondaryColor mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-accentColor1 font-light text-sm">
            <li>+234 (0) 801 234 5678</li>
            <li>okryptcrypto@gmail.com</li>
            <li className="flex justify-center md:justify-start gap-3 mt-4">
              <a href="#">
                <img src={facebookIcon} alt="Facebook" className="w-6" />
              </a>
              <a href="#">
                <img src={instagramIcon} alt="Instagram" className="w-6" />
              </a>
              <a href="#">
                <img src={x} alt="X" className="w-6" />
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="col-span-2 lg:col-span-1 max-w-xs lg:max-w-none mx-auto lg:mx-0">
          <h4 className="font-bold text-xl text-secondaryColor mb-4">
            Subscribe to our newsletter
          </h4>
          <p className="text-accentColor1 font-light text-sm mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center py-2">
            <input
              className="bg-[#666262] w-full text-accentColor1 font-light text-sm mr-3 py-4 px-3 leading-tight border-none outline-none rounded-xl"
              type="email"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <button className="flex-shrink-0 bg-secondaryColor text-primaryColor6 py-2 px-3 rounded-full">
              <img src={sendIcon} alt="Send" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
