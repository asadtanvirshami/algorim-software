"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import moment from "moment";
import debounce from "lodash.debounce";
import io from "socket.io-client";
import Cookies from "js-cookie";
import { Bell, LogOut, Settings, ShieldIcon } from "lucide-react";

import { logout } from "@/redux/actions/user-action";
import { notificationApi } from "@/service/notification";
import UserForm from "@/app/(user)/protected-route/dashboard/projects-section/form/user-form";
import ThemeSwitcher from "./theme-switch";
import { Separator } from "./separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: any) => state?.user?.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalData, setTotalData] = useState(0);
  const [updates, setUpdates] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdown, setIsOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const socket = io(process.env.NEXT_PUBLIC_SERVER_URL as string);

  React.useEffect(() => {
    const updateProject = (notification, field) => {
      let message = `Project ${field} is updated to ${notification[field]}`;
      if (field === "approval") {
        message = `Project approval is ${
          notification[field] ? "Approved" : "Rejected"
        }`;
      } else if (field === "active") {
        message = `Project active is updated to ${
          notification[field] ? "Active" : "Inactive"
        }`;
      }

      setUpdates((prevUpdates) => [
        ...prevUpdates,
        {
          id: notification.id || Math.random(),
          message,
          view: false,
        },
      ]);
    };

    socket.on("projectStatusUpdate", (notification) =>
      updateProject(notification, "status")
    );
    socket.on("projectApprovalUpdate", (notification) =>
      updateProject(notification, "approval")
    );
    socket.on("projectActiveUpdate", (notification) =>
      updateProject(notification, "active")
    );
    socket.on("projectCompletionUpdate", (notification) =>
      updateProject(notification, "completion_percentage")
    );

    return () => {
      socket.off("projectStatusUpdate");
      socket.off("projectApprovalUpdate");
      socket.off("projectActiveUpdate");
      socket.off("projectCompletionUpdate");
    };
  }, []);

  useEffect(() => {
    async function fetchNotifications() {
      setIsLoading(true);
      const result: any = await notificationApi.get(user?.sub, page, 5);
      if (!result) return;

      setTotalData(result?.total);
      const newUpdates = result?.data.map((notification) => {
        if (notification.type === "status") {
          return {
            id: notification.id,
            message: `Project status is updated to ${notification.value}`,
            view: true,
          };
        }
        if (notification.type === "approval") {
          return {
            id: notification.id,
            message: `Project approval is ${
              notification.value ? "Approved" : "Rejected"
            }`,
            view: true,
          };
        }
        if (notification.type === "active") {
          return {
            id: notification.id,
            message: `Project active is updated to ${
              notification.value ? "Active" : "Inactive"
            }`,
            view: true,
          };
        }
      });

      setUpdates((prevUpdates) => [...prevUpdates, ...newUpdates]);
      setIsLoading(false);
      if (updates.length + newUpdates.length >= result.total) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    }

    fetchNotifications();
  }, [page]);

  const handleScroll = debounce((e) => {
    const target = e.target;
    const { scrollTop, clientHeight, scrollHeight } = target;
    if (
      scrollTop + clientHeight >= scrollHeight - 300 &&
      updates.length < totalData &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, 500);

  useEffect(() => {
    const container = dropdownRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [updates, hasMore]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleClick = () => {
    setUpdates((prevUpdates) =>
      prevUpdates.map((update) => ({ ...update, view: true }))
    );
  };

  const hasUnreadNotifications = updates.some((update) => !update.view);

  return (
    <>
      <div className="bg-white md:m-12 lg:m-12 font-[family-name:var(--font-redhat)]">
        <div className="mt-5 ">
          <div className="md:flex lg:flex ">
            <div>
              <h1 className="font-bold capitalize text-lg">
                Welcome, {user?.firstName + user?.lastName || ""}
              </h1>
              <h1 className="font-semibold text-xl text-darkGray">
                {user?.email}
              </h1>
            </div>
            <div className="ml-auto ">
              <h1 className="font-semibold text-md">
                {moment().format("MMMM Do YYYY")}
              </h1>
              <h1 className="font-semibold text-xl">
                {moment().format("dddd")}
              </h1>
              <div className="space-x-4 mt-2 flex justify-end">
                <div>
                  <div className="relative inline-block">
                    <button
                      onClick={() => setIsOpenDropdown(!isDropdown)}
                      className="rounded-full p-2 bg-card border text-black dark:text-white"
                    >
                      <Bell size={20} />
                      {hasUnreadNotifications && (
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                      )}
                    </button>

                    {/* Dropdown */}
                    {isDropdown && (
                      <div
                        onClick={handleClick}
                        className="absolute z-10 mt-2 w-[14rem] bg-card p-2 border border-gray-700 rounded-md shadow-lg "
                        style={{
                          top: "100%", 
                          marginTop: "0.5rem", 
                        }}
                      >
                        <div
                          ref={dropdownRef}
                          className="max-h-[200px] overflow-y-auto"
                          onScroll={handleScroll}
                        >
                          {updates.map((update, i) => (
                            <>
                              <p className="text-sm" key={update.id}>
                                {update.message}
                              </p>
                              <Separator className="mt-2" />
                            </>
                          ))}
                        </div>
                        {isLoading && (
                          <div className="p-2 text-center text-sm text-white">
                            Loading more...
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => {
                    router.push("/auth/signin");
                    Cookies.remove("token");
                    Cookies.remove("user");
                    dispatch(logout());
                  }}
                  className="rounded-full p-2 bg-card border text-black dark:text-white"
                >
                  <LogOut size={20} />
                </button>
                <ThemeSwitcher />
                <button
                  className="rounded-full p-2 bg-card border text-black dark:text-white"
                  onClick={() => setIsOpen(true)}
                >
                  <Settings size={20} />
                </button>
              </div>
            </div>
          </div>
          <Separator className="mt-5" />
        </div>
        {children}
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-h-[900px] overflow-y-auto text-left"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <div className="flex items-center justify-center gap-4">
              <DialogTitle className="text-lg text-left">
                Account & Security
              </DialogTitle>
              <ShieldIcon />
            </div>
          </DialogHeader>
          {<UserForm />}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DashboardLayout;
