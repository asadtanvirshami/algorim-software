"use client";
import { useState } from "react";
import ThemeSwitcher from "./theme-switch";
import Link from "next/link";
import { Button } from "./button";
import { Menu } from "lucide-react";
// import { useRouter } from "next/navigation";
// import ChevronDownIcon from "../Assets/ChevronDown";
// import ChevronUpGradientIcon from "../Assets/ChevronUpGradient";

const TealArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M0.555575 10.1617C0.165058 10.5522 0.16507 11.1854 0.555602 11.5759C0.946133 11.9664 1.5793 11.9664 1.96982 11.5759L0.555575 10.1617ZM12 1.13108C12 0.5788 11.5523 0.131093 11 0.131104L1.99998 0.131273C1.4477 0.131283 0.99999 0.579007 1 1.13129C1.00001 1.68358 1.44773 2.13128 2.00002 2.13127L10 2.13112L10.0002 10.1311C10.0002 10.6834 10.4479 11.1311 11.0002 11.1311C11.5525 11.1311 12.0002 10.6834 12.0002 10.1311L12 1.13108ZM1.96982 11.5759L11.7071 1.8382L10.2929 0.42401L0.555575 10.1617L1.96982 11.5759Z"
        fill="url(#paint0_linear_54_745)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_54_745"
          x1="1.48749"
          y1="1.42156"
          x2="11.0419"
          y2="10.8406"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0CC8E8" />
          <stop offset="1" stopColor="#2DEEAA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

interface NavLinkProps {
  name: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, href }) => {
  return (
    <Link
      href={href}
      className="text-md font-[family-name:var(--font-redhat)] text-black dark:text-white hover:text-orange-300 dark:hover:text-orange-300 transition duration-150 ease-in-out"
    >
      {name}
    </Link>
  );
};

// const TryProductsButton = () => {
//   const router= useRouter()
//   return (
//     <Button onClick={()=>router.push("/auth/signin")} className="font-semibold" shimmer>
//       Sign In <LogIn />
//     </Button>
//   );
// };

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/landing/about",
  },
  {
    name: "Services",
    href: "/landing/services",
  },
  {
    name: "Portfolio",
    href: "/landing/portfolio",
  },
  {
    name: "Privacy Policy",
    href: "/landing/privacy-policy",
  },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen] = useState(false);

  const toogle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between sm:h-10 md:h-16 py-6 px-8 w-full ">
        <div className="flex items-center">
          <div className="flex items-center justify-between  w-full md:w-auto font-[family-name:var(--font-revamped)] ">
            <h1 className="text-4xl">A</h1>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10">
          {links.map(function (link) {
            console.log("test");
            return (
              <div key={Math.random().toString()}>
                <NavLink name={link.name} href={link.href} />
              </div>
            );
          })}
        </div>
        <div className="relative hidden md:flex md:items-center space-x-2 ">
          <ThemeSwitcher />
          {/* <TryProductsButton open={isOpen} /> */}
          {isOpen && (
            <div className="absolute w-[225px] h-full top-14 -left-10 dark:text-white">
              <a
                href="#"
                className="text-[16px] px-6 py-4 h-auto bg-white dark:bg-[#24303A] w-full flex justify-between items-center"
              >
                <span>IZZY AI</span>
                <TealArrow />
              </a>
              <a
                href="#"
                className="text-[16px] px-6 py-4 h-auto bg-white dark:bg-[#24303A] w-full flex justify-between items-center"
              >
                <span>VICTOR AI</span>
                <TealArrow />
              </a>
            </div>
          )}
        </div>
        <div className="-mr-2 flex items-center md:hidden space-x-2">
          <ThemeSwitcher />
          <Button
            type="button"
            onClick={() => toogle()}
            id="main-menu"
            aria-label="Main menu"
            aria-haspopup="true"
            className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-orange-300 dark:bg-black bg-gray-100 hover:bg-gray-100 border focus:outline-none "
          >
            <Menu />
          </Button>
        </div>
      </nav>
      <div
        className={`${
          isMobileMenuOpen
            ? "block  transition-all duration-300 border"
            : "hidden"
        } md:hidden px-2 pt-2 pb-4`}
      >
        {links.map(function (link) {
          console.log("test");
          return (
            <Link
              href={link.href}
              key={link.name}
              className="block text-center text-black dark:text-white px-6 py-2"
            >
              {link.name}
            </Link>
          );
        })}
        <div className="relative w-full text-black dark:text-white mt-3">
          <div className="flex justify-center">
            {/* <TryProductsButton /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
