"use client";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Separator } from "./separator";
import ThemeSwitcher from "./theme-switch";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const user = useSelector((state: any) => state?.user?.user);

  return (
    <>
      <div className="md:m-12 lg:m-12 ">
        <div className="mt-5 ">
          <div className="md:flex lg:flex ">
            <div>
              <h1 className="font-bold text-4xl">
                Welcome, {user?.username || ""}
              </h1>
              <h1 className="font-semibold text-xl text-orange-200">
                {user?.email}
              </h1>
              <ThemeSwitcher />
            </div>
            <div className=" ml-auto ">
              <h1 className="font-semibold text-xl">
                {moment().format("MMMM Do YYYY")}
              </h1>
              <h1 className="font-semibold text-xl">
                {moment().format("dddd")}
              </h1>
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
