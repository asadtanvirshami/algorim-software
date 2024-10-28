import Image from "next/image";
import React from "react";
import consult from "@/assets/images/consult.jpg";
import { InlineWidget } from "react-calendly";

type Props = {};

const Consultaion = (props: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {/* <div>
        <h1 className="text-4xl">Book Consultation</h1>
        <article>Helping you overcome your technology challenges</article>
      </div>
      <div>
        <Image
          className="rounded-xl opacity-[70%]"
          src={consult}
          alt="consultation"
        />
      </div> */}
    </section>
  );
};

export default Consultaion;
