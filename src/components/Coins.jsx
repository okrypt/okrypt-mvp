import React from "react";
import coin1 from "../assets/Frame 1.svg";
import coin2 from "../assets/Frame 2.svg";
import coin3 from "../assets/Frame 3.svg";
import coin4 from "../assets/Frame 4.svg";
import coin5 from "../assets/Frame 5.svg";
import coin6 from "../assets/Frame 6.svg";
import coin7 from "../assets/Frame 7.svg";
import coin8 from "../assets/Frame  8.svg";
import coin9 from "../assets/Frame 9.svg";
import coin10 from "../assets/Frame 10.svg";
import coin11 from "../assets/Frame 11.svg";
import coin12 from "../assets/Frame 12.svg";
import coin13 from "../assets/Frame 13.svg";
import coin14 from "../assets/Frame 14.svg";
import coin15 from "../assets/Frame 15.svg";

const Coins = () => {
  return (
    <div className="px-4 lg:px-14 py-16 w-full bg-primaryColor7 flex items-center justify-center">
      <div className="max-w-[1202px] text-center">
        <div className="text-accentColor1 mb-10">
          <h4 className="font-bold text-4xl max-w-[632px] mx-auto">
            Variety of Coins at your Disposal
          </h4>
          <p className="max-w-[700px] font-light text-sm mt-6 mx-auto">
            Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
            Tincidunt cum. Lorem ipsum dolor sit amet consectetur. Senectus eu
            ac mi purus. Tincidunt cum.
          </p>
        </div>

        {/* Grid for Coins */}
        <div className="grid gap-2">
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-5">
            <img src={coin1} alt="Coin 1" />
            <img src={coin2} alt="Coin 2" />
            <img src={coin3} alt="Coin 3" />
            <img src={coin4} alt="Coin 4" />
            <img src={coin5} alt="Coin 5" />
          </div>
          <div className="hidden md:grid grid-cols-5">
            <img src={coin6} alt="Coin 6" />
            <img src={coin7} alt="Coin 7" />
            <img src={coin8} alt="Coin 8" />
            <img src={coin9} alt="Coin 9" />
            <img src={coin10} alt="Coin 10" />
          </div>
          <div className="hidden md:grid grid-cols-5">
            <img src={coin11} alt="Coin 11" />
            <img src={coin12} alt="Coin 12" />
            <img src={coin13} alt="Coin 13" />
            <img src={coin14} alt="Coin 14" />
            <img src={coin15} alt="Coin 15" />
          </div>

          {/* Mobile View */}
          <div className="md:hidden grid grid-cols-3 ">
            <img src={coin1} alt="Coin 1" />
            <img src={coin2} alt="Coin 2" />
            <img src={coin3} alt="Coin 3" />
          </div>
          <div className="md:hidden grid grid-cols-3 ">
            <img src={coin4} alt="Coin 4" />
            <img src={coin14} alt="Coin 14" />
            <img src={coin5} alt="Coin 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coins;
