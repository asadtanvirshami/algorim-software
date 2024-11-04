import React from "react";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";

import ThemeSwitcher from "./theme-switch";
import { Lock, LucideLockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";

interface MenuProps {
  name: string;
  href: string;
}

const Navbar = () => {
  const router = useRouter()
  const Menu = [
    {
      name: "Home",
      href: "/landing/home",
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
    // {
    //   name: "Careers",
    //   href: "/landing/home",
    // },
    // {
    //   name: "Blog",
    //   href: "/landing/home",
    // },
    // {
    //   name: "Case Studies",
    //   href: "/landing/home",
    // },
  ];

  return (
    <header className="my-2 flex justify-between lg:justify-evenly bg-transparent">
      <div>
        <h1 className="font-[family-name:var(--font-revamped)] text-4xl">A</h1>
      </div>
      <nav className="justify-around hidden lg:flex space-x-1 rounded-lg max-w-full border font-[family-name:var(--font-geist-sans)]">
        {Menu.map(({ name, href }: MenuProps) => {
          return (
            <ul
              key={name}
              className="flex justify-around font-semibold mx-2 p-2 rounded-md transition duration-500"
            >
              <Link
                href={href}
                className="font-[family-name:var(--font-redhat)]"
              >
                {" "}
                {name}
              </Link>
            </ul>
          );
        })}
      </nav>
      <div className="flex justify-evenly space-x-3">
        <ThemeSwitcher />
        {/* <Button className="font-semibold font-[family-name:var(--font-geist-sans)]">Signin</Button> */}
        <Button
          onClick={() => router.push("/auth/signin")}
          className="font-semibold rounded-full p-3 h-full font-[family-name:var(--font-geist-sans)]"
        >
          <LucideLockKeyhole className="w-full" />
        </Button>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Navbar;
