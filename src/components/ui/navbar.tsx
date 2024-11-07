import React from "react";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";

import ThemeSwitcher from "./theme-switch";
import { LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface MenuProps {
  name: string;
  href: string;
}

const Navbar = () => {
  const router = useRouter();
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
      <div className="flex justify-evenly items-center space-x-3">
        <Button
          shimmer
          onClick={() => router.push("/auth/signin")}
          className="font-semibold font-[family-name:var(--font-geist-sans)]"
        >
          Signin
          <LogInIcon size={18} />
        </Button>
        <ThemeSwitcher />
        {/* <Button className="font-semibold font-[family-name:var(--font-geist-sans)]">Signin</Button> */}

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Navbar;
