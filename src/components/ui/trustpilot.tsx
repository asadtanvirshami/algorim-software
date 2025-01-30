import { HeartFilledIcon, StarFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const TrustPilot = () => {
  return (
    <div
      className="trustpilot-widget justify-center flex"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="67420382214c57486a2cf9d6"
      data-style-height="52px"
      data-style-width="100%"
    >
      <a
        href="https://www.trustpilot.com/review/algorimsoftware.io"
        target="_blank"
        rel="noopener"
        className="flex items-center border w-fit p-2 rounded-md bg-white"
      >
        Review us on <StarFilledIcon className="text-green-400 h-6 w-6 ml-1" />Trustpilot with <HeartFilledIcon className="text-red-500 h-6 w-6 ml-1"/>
      </a>
    </div>
  );
};

export default TrustPilot;
