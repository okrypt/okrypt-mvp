import React from "react";
import earthImage from "../assets/Earth.svg";

const Trade = () => {
  return (
    <div className="relative px-4 lg:px-14 py-16 w-full bg-primaryColor7">
      {/* Earth Image for Mobile */}
      <img
        src={earthImage}
        alt="Earth"
        className="absolute inset-0 w-full h-full object-cover opacity-10 md:hidden"
      />

      <div className="relative max-w-[1202px] flex flex-col md:flex-row">
        <div className="max-w-[629px] z-10">
          <div className="text-accentColor1">
            <h4 className="font-bold text-4xl max-w-[632px]">
              Trade Globally, Succeed Locally.
            </h4>
            <h3 className="font-semibold text-2xl text-secondaryColor mt-4 max-w-[509px]">
              Join Our Widely Used Trading Platform.
            </h3>

            <p className="max-w-[551px] font-light text-sm mt-6">
              Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
              Tincidunt cum. Lorem ipsum dolor sit amet consectetur. Senectus eu
              ac mi purus. Tincidunt cum.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 mt-10 space-y-2">
            <div className="text-accentColor1 max-w-[160px]">
              <h4 className="font-bold text-2xl">9.5k+</h4>
              <p className="font-light text-xs">
                Number of active people who make transaction on Okrypt.
              </p>
            </div>
            <div className="text-accentColor1 max-w-[160px]">
              <h4 className="font-bold text-2xl">29</h4>
              <p className="font-light text-xs">
                Countries where Okrypt is available for transactions.
              </p>
            </div>
            <div className="text-accentColor1 max-w-[160px]">
              <h4 className="font-bold text-2xl">204</h4>
              <p className="font-light text-xs">
                Average number of successful daily transactions on Okrypt.
              </p>
            </div>
          </div>
        </div>

        {/* Earth Image for Desktop */}
        <img
          src={earthImage}
          alt="Earth"
          className="w-1/2 h-auto hidden md:block"
        />
      </div>
    </div>
  );
};

export default Trade;
