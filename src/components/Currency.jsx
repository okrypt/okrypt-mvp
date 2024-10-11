import React from "react";
import currencyImage from "../assets/currency.svg";
import shieldCheck from "../assets/Shield-Check.svg";

const Currency = () => {
  return (
    <div className=" px-4 lg:px-14 py-16 w-full bg-primaryColor7 flex justify-center">
      <div className="max-w-[1178px] h-auto flex gap-6  flex-col md:flex-row">
        <div>
          <img src={currencyImage} alt="" />
        </div>
        <div className="text-accentColor1">
          <h4 className="font-semibold text-4xl">~USDT, ~EUR, ~CAD</h4>
          <p className="text-sm font-light mt-2 max-w-[473px]">
            Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
            Tincidunt cum.Lorem ipsum dolor sit amet consectetur. Senectus eu ac
            mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="mt-3 flex gap-3">
            <img
              src={shieldCheck}
              alt=""
              className="max-w-[28px] max-h-[28px]"
            />
            <h5 className="max-w-[308px] font-medium text-xl">
              Fast, Easy and Secure transaction.
            </h5>
          </div>
          <div className="mt-3 flex gap-3">
            <img
              src={shieldCheck}
              alt=""
              className="max-w-[28px] max-h-[28px]"
            />
            <h5 className="max-w-[308px] font-medium text-xl">
              Affordable Buying Rate.{" "}
            </h5>
          </div>
          <div className="mt-3 flex gap-3">
            <img
              src={shieldCheck}
              alt=""
              className="max-w-[28px] max-h-[28px]"
            />
            <h5 className="max-w-[308px] font-medium text-xl">
              High Exchange Rate.{" "}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
