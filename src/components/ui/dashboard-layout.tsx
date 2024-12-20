"use client";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Separator } from "./separator";
import ThemeSwitcher from "./theme-switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";
import { Bell, LogOut, Router, Settings } from "lucide-react";
import io from "socket.io-client";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/actions/user-action";
import { notificationApi } from "@/service/notification";
interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const user = useSelector((state: any) => state?.user?.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const [updates, setUpdates] = useState([]);

  const socket = io("http://localhost:8080");
  React.useEffect(() => {
    const updateProject = (notification, field) => {
      if (field === "approval") {
        let value = notification[field] ? "Approved" : "Rejected";
        setUpdates((prevUpdates) => [
          ...prevUpdates,
          {
            id: 1,
            message: `Project ${field} is  ${value}`,
            view: false,
          },
        ]);
      }
      if (field === "active") {
        let value = notification[field] ? "Active" : "Inactive";
        setUpdates((prevUpdates) => [
          ...prevUpdates,
          {
            id: 1,
            message: `Project ${field} is updated to ${value}`,
            view: false,
          },
        ]);
      }
      if (field != "active" && field != "approval") {
        setUpdates((prevUpdates) => [
          ...prevUpdates,
          {
            id: 1,
            message: `Project ${field} is updated to ${notification[field]}`,
            view: false,
          },
        ]);
      }
    };

    // Event listeners
    socket.on("projectStatusUpdate", (notification) =>
      updateProject(notification, "status")
    );
    socket.on("projectApprovalUpdate", (notification) =>
      updateProject(notification, "approved")
    );
    socket.on("projectActiveUpdate", (notification) =>
      updateProject(notification, "active")
    );
    socket.on("projectCompletionUpdate", (notification) =>
      updateProject(notification, "completion_percentage")
    );
    // Cleanup on unmount
    return () => {
      socket.off("projectStatusUpdate");
      socket.off("projectApprovalUpdate");
      socket.off("projectActiveUpdate");
      socket.off("projectCompletionUpdate");
    };
  }, [socket]);

  async function getNotifications() {
    const notifications = await notificationApi.get(user?.sub);
    let tempState = [];
    if (notifications) {
      notifications.forEach((notification) => {
        notification.type === "status" &&
          tempState.push({
            id: notification.id,
            message: `Project status is updated to ${notification.value}`,
            view: true,
            latest: false,
          });
        notification.type === "approval" &&
          tempState.push({
            id: notification.id,
            message: `Project approval is  ${
              notification.value ? "Approved" : "Rejected"
            }`,
            view: true,
          });
        notification.type === "active" &&
          tempState.push({
            id: notification.id,
            message: `Project active is updated to ${
              notification.value ? "Active" : "Inactive"
            }`,
            view: true,
          });
      });
    }

    setUpdates(tempState);
  }
  const handleClick = () => {
    let tempState = [...updates];
    tempState.forEach((update) => {
      update.view = true;
    });
    setUpdates(tempState);
  };
  useEffect(() => {
    if(user){
      getNotifications();
    }
  }, []);

  const hasUnreadNotifications = updates.some((update) => !update.view);

  return (
    <>
      <div className="md:m-12 lg:m-12   font-[family-name:var(--font-redhat)]">
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
                <DropdownMenu onOpenChange={handleClick}>
                  <div className="relative inline-block">
                    <DropdownMenuTrigger className="rounded-full  p-2 bg-card border text-black dark:text-white">
                      <Bell size={20} />
                      {hasUnreadNotifications && (
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                      )}
                    </DropdownMenuTrigger>
                  </div>
                  <DropdownMenuContent>
                    {updates.reverse().map((update) => {
                      return (
                        <DropdownMenuLabel key={update.id}>{update?.message}</DropdownMenuLabel>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
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
                  <Settings
                    onClick={() => {
                      router.push("/protected-route/user/profile");
                    }}
                    size={20}
                  />
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
