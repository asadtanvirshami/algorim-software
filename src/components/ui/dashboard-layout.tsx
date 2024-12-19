"use client";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Separator } from "./separator";
import ThemeSwitcher from "./theme-switch";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { LogOut, Router, Settings } from "lucide-react";

import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/actions/user-action";
interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const user = useSelector((state: any) => state?.user?.user);
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <div className="md:m-12 lg:m-12 ">
        <div className="mt-5 ">
          <div className="md:flex lg:flex ">
            <div>
              <h1 className="font-bold capitalize text-lg">
                Welcome, {user?.username || ""}
              </h1>
              <h1 className="font-semibold text-xl text-orange-200">
                {user?.email}
              </h1>
            </div>
            <div className=" ml-auto ">
              <h1 className="font-semibold text-md">
                {moment().format("MMMM Do YYYY")}
              </h1>
              <h1 className="font-semibold text-xl">
                {moment().format("dddd")}
              </h1>
              <div className="space-x-4 mt-2 flex justify-end">
                <button
                  onClick={() => {
                    router.push("/auth/signin");
                    Cookies.remove("token");
                    Cookies.remove("user");
                    dispatch(logout());
                  }}
                  className="rounded-full  p-2 bg-card border text-black dark:text-white"
                >
                  <LogOut size={20} />
                </button>
                <ThemeSwitcher />
                <button className="rounded-full p-2 bg-card border text-black dark:text-white">
                  <Settings  onClick={() => {
                    router.push("/protected-route/user/profile");
                  }} size={20} />
                </button>
              </div>
            </div>
          </div>
          <Separator className="mt-5" />
        </div>
        <>{children}</>
      </div>
    </>
  );
};

export default DashboardLayout;
