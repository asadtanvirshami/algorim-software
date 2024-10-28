import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col border-t-black border p-5 justify-center items-center mt-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 container space-x-20">
        <div >
          <h1 className="text-2xl font-bold">About</h1>
          <article className=" text-justify tracking-tighter">
            Algorim is an innovative IT company specializing in cutting-edge
            solutions across blockchain, artificial intelligence, cybersecurity,
            and full-stack development. Our team is dedicated to transforming
            businesses through secure, scalable, and intelligent technologies
            that drive growth and efficiency.
          </article>
        </div>
        <ul>
          <h2 className="font-bold">Pages</h2>
          <li>
            <Link href={"/landing/home"}>Home</Link>
          </li>
          <li>
            <Link href={"/landing/home"}>About Us</Link>
          </li>
          <li>
            <Link href={"/landing/home"}>Services</Link>
          </li>
          <li>
            <Link href={"/landing/home"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/landing/home"}>Careers </Link>
          </li>
        </ul>
        <ul>
          <h2 className="font-bold">Socials</h2>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
        <ul>
          <h2 className="font-bold">Legal</h2>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
        </ul>
      </div>
      <div className="flex">
        <h1 className="text-[4rem] md:text-[8rem] lg:text-[12rem] font-bold font-[family-name:var(--font-revamped)] opacity-20 ">
          ALGORIM
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
