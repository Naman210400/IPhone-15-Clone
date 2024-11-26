import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="text-gray font-semibold text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store</span> or{" "}
            <span className="underline text-blue">Other retailer</span> near
            you.
          </p>
          <p className="text-gray font-semibold text-xs">
            or call 000800 040 1966.
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col sm:item-center justify-between">
          <p className="text-gray font-semibold text-xs">
            Copyright @ {currentYear} Apple Inc. All rights reserve.
          </p>
          <div className="flex">
            {footerLinks?.map((link, i) => (
              <p key={link} className="text-gray font-semibold text-xs">
                {link}{" "}
                {i !== footerLinks?.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
