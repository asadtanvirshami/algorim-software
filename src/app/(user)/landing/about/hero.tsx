import { Handshake, Rocket, Star, UsersRoundIcon } from "lucide-react";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full items-center justify-between text-sm lg:flex"></div>

        {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-slate-200 before:dark:opacity-10 after:dark:from-slate-500 after:dark:via-[#333333] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-[16rem] font-bold">ALGORIM</h1>
      </div> */}
        <div className="relative  flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full  after:dark:via-[#333333] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <div >
            <h1 className="text-[4rem] lg:text-[14rem] font-bold font-[family-name:var(--font-revamped)]  ">
              ALGORIM
            </h1>
            <h1 className=" font-[family-name:var(--font-redhat)] text-center dark:text-white text-xl font-bold  md:text-5xl lg:text-4xl">
              Create-Consult-Comply
            </h1>
          </div>
        </div>
        <div className="mb-32 grid text-center">
          <article className="text-justify font-[family-name:var(--font-redhat)]">
            At Algorim, we believe in the power of innovation to drive
            meaningful change. We’re passionate about building technology that
            not only meets today’s needs but also anticipates the possibilities
            of tomorrow. Our work is guided by a commitment to excellence, where
            every project is an opportunity to deliver value, inspire
            creativity, and push boundaries. We hold that design should be
            intuitive and empowering, development should be robust and secure,
            and every solution should be as unique as the client it serves.
            Transparency, collaboration, and a user-centered approach define how
            we engage, ensuring that the results reflect our dedication to
            quality and integrity. At the heart of Algorim, we believe that
            technology should elevate human experience making it simpler, more
            accessible, and endlessly inspiring.
          </article>
        </div>
      </main>
    </div>
  );
};

export default Hero;
