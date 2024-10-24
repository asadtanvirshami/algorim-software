import Image from "next/image";
import React from "react";
import Gif from "@/assets/images/push.gif";

// ... rest of your code ...

type Props = {};

const Update = (props: Props) => {
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 justify-stretch w-full ">
        <Image alt="mobile-app" className="rounded-xl w-fit lg:ml-52" src={Gif} />
        <div className="font-[family-name:var(--font-geist-sans)]">
          <h1 className="w-full font-semibold text-3xl md:text-5xl lg:text-6xl">
            It's important for you to know what's new
          </h1>
          <article className="tracking-tighter text-justify text-[15px] md:text-xl lg:text-xl">
            From the start to finish, we'll update you on what's new. Either
            it's the features, the design, or the code. We make sure that we are
            in touch with you.
          </article>
        </div>
      </div>
    </div>
  );
};

export default Update;
