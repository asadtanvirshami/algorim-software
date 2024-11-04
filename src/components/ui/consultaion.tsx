import Image from "next/image";
import React from "react";
import consult from "@/assets/images/consult.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const Consultaion = (props: Props) => {
  return (
    <section className="flex  bg-zinc-900 dark:bg-card justify-center items-center border rounded-lg font-[family-name:var(--font-redhat)] text-white" >
      <div className="w-fit gap-12 p-6 flex items-center ">
        <div>
          <h1 className="text-4xl">Book Consultation</h1>
          <article>Helping you overcome your technology challenges</article>
          <div>
            <Button className="mt-3"><Link href="https://calendly.com/algorim">Book Consultaion</Link></Button>
          </div>
        </div>
        <div>
          <Image
            src={consult}
            alt="consultation"
            className="rounded-lg w-full md:w-52 md:h-52 lg:w-52 lg:h-52"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Consultaion;
