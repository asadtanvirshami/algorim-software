"use client";

import React from "react";
import FAQs from "@/components/ui/faqs";
import ContactForm from "@/components/ui/contact-form";
import Consultaion from "@/components/ui/consultaion";
import Head from "next/head";
import CountUp from "@/components/ui/count-up";
import Services from "./services";
import Tech from "./tech";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import WhyUs from "./why-us";
type Props = {};

const About = (props: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Services - Algorim - Blockchain & AI Solutions</title>
        <meta
          name="description"
          content="Utilizing the technology of Blockchain & AI for Business. We build robust, scalable, and secure solutions for your business. Learn more about our services."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Services Page - Algorim" />
        <meta
          property="og:description"
          content="Utilizing the technology of Blockchain & AI for Business. We build robust, scalable, and secure solutions for your business"
        />
        <meta property="og:url" content="https://algorimsoftwares.io" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="relative isolate overflow-hidden w-full h-full  ">
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

        <div className="mx-auto h-full justify-center items-center align-middle max-w-7xl  sm:pb-32 lg:flex lg:py-30 lg:px-8">
          <div className="mx-auto  max-w-xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center text-center "></div>
          </div>
        </div>
        <div className="w-full">
          <div className="container mx-auto space-y-12 md:space-y-22 lg:space-y-52 p-3">
            <WhyUs/>
            <Services />
            <Tech />
            <CountUp />
            <MacbookScroll/>
            <Consultaion />
            <ContactForm />
            <FAQs />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;