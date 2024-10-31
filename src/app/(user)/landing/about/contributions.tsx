import React from "react";
import Image from "next/image";

import support from "@/assets/images/daria-nepriakhina-xY55bL5mZAM-unsplash.jpg";
import startup from "@/assets/images/annie-spratt-QckxruozjRg-unsplash.jpg";
import web3 from "@/assets/images/shubham-dhage-UxDU0Gg5pqQ-unsplash.jpg";

type Props = {};

const Contributions = (props: Props) => {
  const contributes = [
    {
      icon: support,
      title: "Support Team",
      description:
        "Helping & fulfilling startups needs to work in the digital & decentralized world.",
    },
    {
      icon: startup,
      title: "Decentralized World",
      description:
        "Helping physical businesses to be recognized digitally in decentralized world.",
    },
    {
      icon: web3,
      title: "Web 3 space",
      description:
        "Making contribution to the web3 space by building amazing projects.",
    },
  ];
  return (
    <>
      <div className="space-y-12 font-[family-name:var(--font-geist-sans)]">
        <h1 className="w-full font-semibold text-3xl md:text-4xl lg:text-4xl text-center">
          Dedicated to contribute to the community
        </h1>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-full dark:text-white justify-evenly items-center ">
          {contributes.map((item) => {
            return (
                <div
                key={item.title}
                className="border  h-full font-[family-name:var(--font-geist-sans)] bg-white space-y-2 rounded-xl dark:bg-card  "
              >
                <Image src={item.icon} alt={item.title} className="w-full object-cover h-52  rounded-xl " />
                <div className="p-3">
                <h2 className="font-semibold text-xl dark:text-orange-300">
                  {item.title}
                </h2>
                <article>{item.description}</article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contributions;
