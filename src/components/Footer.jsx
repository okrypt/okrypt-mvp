import React from "react";

const Footer = () => {
  return (
    <div className="px-4 lg:px-14 py-8 w-full bg-primaryLight">
      <div className="max-w-[1259.56px] border-t-[1px] border-accentColor1 mx-auto text-accentColor1">
        {/* Footer Title */}
        <h6 className="font-semibold text-lg md:text-xl text-center lg:text-left mb-5 mt-4">
          &copy; Okryptcrypto. All rights reserved.
        </h6>

        {/* Footer Text */}
        <p className="font-light text-sm md:text-base text-center lg:text-left mx-auto lg:mx-0 leading-relaxed">
          Okrypt is a peer-to-peer platform that enables the purchase and sale
          of Cryptocurrency. These services are facilitated by the okrypt crypto
          technology. Okrypt does not provide remittance services in the form of
          fiat. Okrypt is not a foreign remittance or money exchange platform.
          Bitnob is in partnership with third party licensed companies that
          facilitate and provide other services on its behalf.
        </p>
      </div>
    </div>
  );
};

export default Footer;
