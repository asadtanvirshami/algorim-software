"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

import crm from "@/assets/tab.gif";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none dark:text-orange-300">
                Ultimate Apps
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={crm}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover w-full h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
