import { GlobeModel } from "./globe";
import { GlobeIcon, HandHeart, HeartHandshakeIcon } from "lucide-react";
import React from "react";

const Serving = () => {
  const Business = [
    {
      icon: <HandHeart className="text-red-500" />,
      title: "Support",
      description: "With our expertise and experience, we can help",
    },
    {
      icon: <GlobeIcon className="text-blue-400" />,
      title: "Wordwide",
      description: "From anywhere to every where in the world",
    },
    {
      icon: <HeartHandshakeIcon className="text-green-400" />,
      title: "Strong Team",
      description: "We team up with you to achieve your goals",
    },
  ];
  return (
    <section className="pt-12">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-stretch w-full ">
        <div className="font-[family-name:var(--font-redhat)]">
          <h1 className="w-full font-semibold text-3xl md:text-5xl lg:text-6xl">
            Serving companies of all sizes, <strong className="font-[family-name:var(--font-redhat-extra)]">worldwide</strong>.
          </h1>
          <article className="tracking-tight bg-white mt-8 text-justify text-[15px] md:text-xl lg:text-xl">
            Not only do we help our clients build and scale their software
            products, we also help them build and grow their businesses.
          </article>
          <div className="flex space-x-3">
            <div className=" lg:space-x-3 lg:flex w-full dark:text-white justify-center items-center ">
              {Business.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="border mt-4 font-[family-name:var(--font-redhat)] flex-col bg-white shadow-lg text-darkGray  p-3 h-fit rounded-md"
                  >
                    {item.icon}
                    <h2 className="font-[family-name:var(--font-redhat-semi)] text-xl">
                      {item.title}
                    </h2>
                    <article >{item.description}</article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <GlobeModel />
      </div>
    </section>
  );
};

export default Serving;
