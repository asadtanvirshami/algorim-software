import React from "react";

const Hero = () => {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full items-center justify-between text-sm lg:flex"></div>

        {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-slate-200 before:dark:opacity-10 after:dark:from-slate-500 after:dark:via-[#333333] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="text-[16rem] font-bold">ALGORIM</h1>
        </div> */}
        <div className="relative  flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full  after:dark:via-[#333333] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <h1 className="text-[4rem] lg:text-[16rem] font-bold font-[family-name:var(--font-revamped)]  ">
              ALGORIM
            </h1>
            <h1 className=" font-oswald text-center dark:text-white text-xl font-bold  md:text-5xl lg:text-4xl">
              WE BUILD
              <span className="relative whitespace-nowrap text-orange-400">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-400/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative font-[family-name:var(--font-geist-sans)]  ">
              
                  ROBUST APPLICATIONS
                </span>
              </span>
            </h1>
          </div>
        </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-orange-300"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Innovate
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Discover cutting-edge solutions that drive your business forward!
            </p>
          </div>

          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-orange-300"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Transform{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Elevate your operations with our innovative IT strategies and
              expertise.
            </p>
          </div>

          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-orange-300"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Secure{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Protect your digital assets with our state-of-the-art
              cybersecurity solutions.
            </p>
          </div>

          <a
            href="/auth/signup"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-orange-300"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Connect
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Join us on a journey to harness the full potential of technology!
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Hero;
