/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, Component, GemIcon } from "lucide-react";
const Business = [
  {
    icon: <GemIcon className="text-darkGray " />,
    title: "Mid-Sized",
    description: "Launch your core software and get to market faster",
  },
  {
    icon: <Component className="text-darkGray " />,
    title: "Large",
    description: "Easily scale your business to meet increased demand",
  },
  {
    icon: <Building2 className="text-darkGray " />,
    title: "Enterprises",
    description: "Innovate quickly without burdening your internal teams",
  },
];

const Vision = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4 md:space-y-0 lg:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 w-full flex-row font-[family-name:var(--font-redhat)]">
        <h1 className="w-full font-semibold text-3xl md:text-5xl lg:text-6xl">
          You bring the{" "}
          <strong className="font-[family-name:var(--font-redhat-extra)]">
            vision
          </strong>
          , we bring the{" "}
          <strong className=" font-[family-name:var(--font-redhat-extra)] ">
            spark.
          </strong>
        </h1>
        <div className="space-y-5">
          <article className="tracking-tight bg-white text-justify text-[15px] md:text-xl lg:text-xl">
            The size of your vision is more important than the size of your
            organization. Whether you're a mid-sized business, an enterprise, or
            somewhere in between, Algorim is your Goldilocks software partner.
            Our iterative, high-empathy design approach reduces risk and ensures
            a software solution that's just right for your business.
          </article>
          <Button className=" bg-professional">
            {/* <Link href="/auth/signin"> */}
            Learn More About Our Streamline Process
            {/* </Link> */}
          </Button>
        </div>
      </div>
      <div className=" lg:space-x-3 lg:flex w-full dark:text-white justify-center items-center ">
        {Business.map((item) => {
          return (
            <div
              key={item.title}
              className="border text-professional shadow-lg bg-white  mt-4 font-[family-name:var(--font-redhat)] flex-col space-y-3 dark:bg-card  p-5 h-fit rounded-md"
            >
              {item.icon}
              <h2 className="font-[family-name:var(--font-redhat-semi)] text-xl ">
                {item.title}
              </h2>
              <article>{item.description}</article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vision;
