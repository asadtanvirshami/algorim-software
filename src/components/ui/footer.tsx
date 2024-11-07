import Link from "next/link";
import React from "react";
  
const Footer = () => {
  return (
    <footer className="flex flex-col border-t-black border p-5 justify-center items-center mt-20 font-[family-name:var(--font-redhat)]">
      <div className="grid grid-cols-1 align-middle text-center container justify-center gap-5 md:grid-cols-3 lg:grid-cols-4 ">
        <div>
          <h1 className="text-xl font-bold">About</h1>
          <article className=" text-justify text-sm tracking-tighter">
            Algorim is an innovative IT company specializing in cutting-edge
            solutions across blockchain, artificial intelligence, cybersecurity,
            and full-stack development. Our team is dedicated to transforming
            businesses through secure, scalable, and intelligent technologies
            that drive growth and efficiency.
          </article>
        </div>
        <ul className="text-sm">
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
        <ul className="text-sm">
          <Link href={"https://www.instagram.com/algorim.io/"}>
            <li>Instagram</li>
          </Link>
          <Link href={"https://www.linkedin.com/company/algorim-io/"}>
            <li>LinkedIn</li>
          </Link>
          <Link href={"https://www.facebook.com/profile.php?id=61568140792184"}>
            <li>Facebook</li>
          </Link>
        </ul>
        <ul className="text-sm">
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
