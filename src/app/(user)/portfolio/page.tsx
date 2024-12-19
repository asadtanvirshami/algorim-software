"use client";
import React, { memo } from "react";
import { HeroParallaxDemo } from "./showcase";
import Consultaion from "@/components/ui/consultaion";
import ContactForm from "@/components/ui/contact-form";
import FAQs from "@/components/ui/faqs";
import CountUp from "@/components/ui/count-up";
import SeoHead from "@/components/ui/seo-head";

const Portfolio = () => {
  return (
    <React.Fragment>
      <SeoHead
        title="Portfolio - Algorim - Blockchain & AI Solutions"
        description="Utilizing the technology of Blockchain & AI for Business. We build robust, scalable, and secure solutions for your business"
      />

      <div className="relative isolate overflow-hidden w-full h-full  font-[family-name:var(--font-redhat)] ">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-100 [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M.5 200V.5H200"
                fill="none"
                stroke="gray"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>

        <div className="mx-auto h-full justify-center items-start align-start max-w-7xl  sm:pb-32 lg:flex lg:py-30 lg:px-8">
          <div className="mx-auto  max-w-xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center text-start ">
              <HeroParallaxDemo />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="container mx-auto space-y-12 md:space-y-22 lg:space-y-52 p-3">
            <CountUp />
            <ContactForm />
            <Consultaion />
            <FAQs />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default memo(Portfolio);