"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

import crm from "@/assets/tab.gif";

export function HeroScrollDemo() {
  return (
    <div className="flex-col overflow-hidden hidden md:flex lg:flex">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold font-[family-name:var(--font-redhat)] text-black ">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none font-[family-name:var(--font-redhat-extra)]">
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
