import { Badge } from "@/components/ui/badge";
import { IconExclamationCircleFilled, IconExclamationMark } from "@tabler/icons-react";
import {
  Activity,
  CalendarCheckIcon,
  Clock,
  DollarSignIcon,
  Hash,
  Radar,
} from "lucide-react";
import moment from "moment";
import React from "react";

interface Item {
  label: string;
  icon: React.ReactNode;
  value: string;
  badgeColor:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "aqua_gradient"
    | "red_gradient"
    | "green_gradient"
    | "orange_gradient"
    | "purple_gradient"
    | "yellow_gradient";
}

const DetailSection = ({ project }) => {
  console.log(project);

  return (
    <div className="grid md:grid  lg:grid xl:flex lg:m-auto lg:justify-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 mt-5 gap-4 lg:align-middle">
      {[
        {
          label: "Code",
          icon: Hash,
          value: project?.serial_number,
          badgeColor: "default",
        },
        {
          label: "Deadline",
          icon: CalendarCheckIcon,
          value: moment(project?.deadline).format("MMM D, YY"),
          badgeColor: "red_gradient",
        },
        {
          label: "Status",
          icon: Activity,
          value: project?.status,
          badgeColor:
            project?.status === "on hold"
              ? "red_gradient"
              : project?.status === "completed"
              ? "green_gradient"
              : project?.status === "in progress"
              ? "aqua_gradient"
              : project?.status === "paused"
              ? "red_gradient"
              : "default",
        },
        {
          label: "Approval",
          icon: IconExclamationCircleFilled,
          value: project?.approved === true ? "Approved" : "Unapproved",
          badgeColor: project?.approved ? "green_gradient" : "orange_gradient",
        },
        {
          label: "Active",
          icon: Clock,
          value: project?.active === true ? "Activated" : "Deactivated",
          badgeColor: project?.active ? "green_gradient" : "red_gradient",
        },
        {
          label: "Budget",
          icon: DollarSignIcon,
          value: project?.budget,
          badgeColor: "default",
        },
      ].map((item: any, index) => (
        <div
          key={index}
          className="p-3 rounded-lg bg-black text-white border-gray-500 border-[0.5px] w-full lg:w-[200px] group"
        >
          <div className="flex w-full items-center">
            <span className="text-xl lg:text-2xl font-semibold mr-5">
              <p>{item.label}</p>
            </span>
            <div className="flex justify-end w-full relative">
              <item.icon className="text-xl lg:text-3xl relative z-10 text-white group-hover:animate-glow" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-md opacity-50 group-hover:opacity-100 transition duration-500"></span>
            </div>
          </div>
          {item.label === "Budget" ? (
            <p className="mt-2 md:text-xl lg:text-2xl font-bold">
              {item?.value}
            </p>
          ) : (
            <div className="mt-2">
              <Badge variant={item.badgeColor}>{item.value}</Badge>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DetailSection;
