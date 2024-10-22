"use client";
import Image from "next/image";
import React from "react";

import logo from "../../assets/a_white.png";
import { useRouter } from "next/navigation";

const LoadingPage = () => {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => router.push("/landing/home"), 800);
  }, []);
  return (
    <div className="h-screen bg-black">
      <div className="w-full h-full flex justify-center items-center align-middle">
        <div>
          <Image
            src={logo}
            className="h-full w-full animate-pulse"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
