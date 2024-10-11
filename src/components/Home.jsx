import React from "react";
import appleIcon from "../assets/🦆 icon _Apple iOS App Store_.svg";
import googleIcon from "../assets/Frame 3472957.svg";
import phoneImage from "../assets/phone.svg";
import transactionIcon from "../assets/fast.svg";
import exchangeIcon from "../assets/high.svg";
import customerIcon from "../assets/care.svg"
// import okryptImage from "../assets/background-image.jpg"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-current to-[#3927af] flex flex-col pt-20 justify-center items-center">
      <div className="container mx-auto px-4 lg:p text-center">
        {/* Text Section */}
        <div className="mt-12">
          <h1 className="text-3xl text-accentColor1 font-bold">
            JOIN THE BEST ONLINE CRYPTO
            <br />
            <span>EXCHANGE APP.</span>
          </h1>
          <p className="font-light text-accentColor1 mt-4">
            Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
            Tincidunt cum. Lorem ipsum dolor sit amet consectetur. Senectus eu
            ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
            Tincidunt cum.
          </p>
        </div>

        {/* Bottom Section (Download App Section) */}
        <div>
          <h2 className="text-2xl text-secondaryColor font-semibold mt-10 mb-2">
            Download App
          </h2>
          <p className="text-light text-accentColor1 mb-4">
            Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
          </p>

          <div className="mt-6 ">
            <div className="mt-4 flex flex-row justify-center gap-5">
              <button className="bg-[#5840D9] flex gap-2 text-accentColor1 py-2 px-4 rounded-lg">
                <img src={googleIcon} alt="Google Play Store" />
                <div>
                  <p className="text-sm font-thin">Get app on</p>
                  <h4 className="font-bold">Playstore</h4>
                </div>
              </button>
              <button className="bg-[#34EBE10D] flex gap-2 text-secondaryColor py-2 px-4 rounded-lg">
                <img src={appleIcon} alt="Apple App Store" />
                <div>
                  <p className="text-sm font-thin">Download on</p>
                  <h4 className="font-bold">Applestore</h4>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*phoneImage Section */}
      <div className="flex justify-center items-center mt-8 ">
        {/* Phone Image */}
        <img
          src={phoneImage}
          alt="Phone"
          className="w-full max-w-[432px] h-auto object-contain"
        />
      </div>
      <div className="max-w-[1178px] flex flex-col md:flex-row lg:px-8 px-16 py-8 bg-[#1C1737] rounded-xl gap-5">
        <div className="bg-primaryColor7 rounded-md mt max-w-[318px] p-4 text-accentColor1">
          <div className="flex gap-1  font-semibold mb-2">
            <img src={transactionIcon} alt="" />
            <h6 className="">Fast and Easy Transaction</h6>
          </div>
          <p className="text-light text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-primaryColor7 rounded-md mt max-w-[318px] p-4 text-accentColor1">
          <div className="flex gap-1  font-semibold mb-2">
            <img src={exchangeIcon} alt="" />
            <h6 className="">High Exchange Rate</h6>
          </div>
          <p className="text-light text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-primaryColor7 rounded-md mt max-w-[318px] p-4 text-accentColor1">
          <div className="flex gap-1  font-semibold mb-2">
            <img src={customerIcon} alt="" />
            <h6 className="">24/7 Customer Care</h6>
          </div>
          <p className="text-light text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
