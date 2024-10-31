import { GlobeDemo } from "@/app/(user)/landing/home/globe";
import { GlobeIcon, HandHeart, HeartHandshakeIcon } from "lucide-react";
import React from "react";

type Props = {};

const Serving = (props: Props) => {
  const Business = [
    {
      icon: <HandHeart />,
      title: "Support",
      description: "With our expertise and experience, we can help",
    },
    {
      icon: <GlobeIcon />,
      title: "Wordwide",
      description: "From anywhere to every where in the world",
    },
    {
      icon: <HeartHandshakeIcon />,
      title: "Strong Team",
      description: "We team up with you to achieve your goals",
    },
  ];
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-stretch w-full ">
        <div className="font-[family-name:var(--font-geist-sans)]">
          <h1 className="w-full font-semibold text-3xl md:text-5xl lg:text-6xl">
            Serving companies of all sizes, worldwide.
          </h1>
          <article className="tracking-tighter text-justify text-[15px] md:text-xl lg:text-xl">
            Not only do we help our clients build and scale their software
            products, we also help them build and grow their businesses.
          </article>
          <div className="flex space-x-3">
            <div className=" lg:space-x-3 lg:flex w-full dark:text-white justify-center items-center ">
              {Business.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="border mt-4 font-[family-name:var(--font-geist-sans)] flex-col  bg-white  dark:bg-card  p-3 h-fit rounded-md"
                  >
                    {item.icon}
                    <h2 className="font-semibold text-xl dark:text-orange-300">
                      {item.title}
                    </h2>
                    <article>{item.description}</article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <GlobeDemo />
      </div>
    </section>
  );
};

export default Serving;
