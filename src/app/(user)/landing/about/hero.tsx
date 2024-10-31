import { Handshake, Rocket, Star, UsersRoundIcon } from "lucide-react";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="justify-center items-center">
      <h1 className="text-[4rem] lg:text-[16rem] font-bold font-[family-name:var(--font-revamped)]  ">
        ALGORIM
      </h1>
      <article className="font-[family-name:var(--font-geist-sans)] text-justify text-md p-3 tracking-tighter md:text-md lg:text-xl">
        At Algorim, we believe in the power of innovation to drive meaningful
        change. We’re passionate about building technology that not only meets
        today’s needs but also anticipates the possibilities of tomorrow. Our
        work is guided by a commitment to excellence, where every project is an
        opportunity to deliver value, inspire creativity, and push boundaries.
        We hold that design should be intuitive and empowering, development
        should be robust and secure, and every solution should be as unique as
        the client it serves. Transparency, collaboration, and a user-centered
        approach define how we engage, ensuring that the results reflect our
        dedication to quality and integrity. At the heart of Algorim, we believe
        that technology should elevate human experience—making it simpler, more
        accessible, and endlessly inspiring.
      </article>
    </section>
  );
};

export default Hero;
