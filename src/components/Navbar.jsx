import React, { useEffect, useState } from "react";
import logo from "../assets/logos.svg";
import signIn from "../assets/mingcute_download-fill.svg";
import cancelIcon from "../assets/material-symbols_cancel.svg";
import barIcon from "../assets/mingcute_menu-fill.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  //navItems array
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Buy Crypto", path: "buyCrypto" },
    { title: "Sell crypto", path: "sellCrypto" },
    { title: "About Us", path: "aboutUs" },
    { title: "Support", path: "support" },
  ];

  return (
    <header className="w-full  fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-15 px-4 bg-primaryColor7 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b border-accentColor1 duration-100"
            : ""
        }`}
      >
        <div className="flex  justify-between items-center gap-8">
          <a
            href="#"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <div className="w-[30px] h-[30px] bg-[#5F4FA1] flex justify-center items-center rounded-lg">
              <img src={logo} alt="Logo" className="w-[18px] h-[18px]" />
            </div>
            <span className="text-white">Okrypt</span>
          </a>
          {/* nav items for large screen */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map((item, index) => (
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                to={item.path}
                key={index}
                className="text-accentColor1 hover:text-secondaryColor"
              >
                {item.title}
              </Link>
            ))}
          </ul>

          {/* btn to large device */}
          <div className="space-x-12 hidden lg:flex items-center  bg-secondaryColor rounded-lg p-2">
            <a href="#">
              <img
                src={signIn}
                alt="signIn"
                className="inline-block w-[18px] h-[18px]"
              />
            </a>
          </div>

          {/* menu icon toggler for only mobile device  */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <div className="bg-secondaryColor rounded-lg p-1">
                  {" "}
                  <img
                    src={cancelIcon}
                    alt="cancelIcon"
                    className="inline-block w-[18px] h-[18px]"
                  />
                </div>
              ) : (
                <div className="bg-secondaryColor rounded-lg p-1">
                  {" "}
                  <img
                    src={barIcon}
                    alt="barIcon"
                    className="inline-block w-[18px] h-[18px]"
                  />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile device  */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-primaryColor6 ${
            isMenuOpen
              ? "block fixed top-0 right-0 left-56 md:hidden"
              : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-4 items-end pl-4">
            {navItems.map((item, index) => (
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                to={item.path}
                key={index}
                className="text-accentColor1 hover:text-secondaryColor w-full"
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
