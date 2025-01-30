/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import React from "react";
import MobileAnimation from "@/assets/lottie/Showreel-Grid-Mobile-[remix].json";

const WhyUs = () => {
  return (
    <section className=" font-[family-name:var(--font-redhat)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
        <div className="space-y-5">
          <h1 className="w-full font-semibold text-3xl md:text-5xl lg:text-4xl">
            Why you should choose{" "}
            <strong className="font-[family-name:var(--font-revamped)]">
              Algorim
            </strong>{" "}
            as your trusted technology partner
          </h1>
          <article className="text-justify bg-white tracking-tight">
            At Algorim, our primary focus is on understanding and fulfilling
            your unique requirements. We’re not just delivering solutions; we’re
            committed to exceeding your expectations by building systems that
            meet your goals, timelines, and budget. Algorim specializes in a
            diverse range of fields, including Blockchain, Artificial
            Intelligence, Cybersecurity, and Full Stack Development. Our team
            brings deep expertise and a passion for innovation to each project,
            ensuring that you benefit from the latest in tech advancements.
          </article>
        </div>
        <div>
          <Lottie
            style={{ height: 550 }}
            animationData={MobileAnimation}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
