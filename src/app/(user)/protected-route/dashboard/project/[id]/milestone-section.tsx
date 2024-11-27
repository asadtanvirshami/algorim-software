import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Milestone } from "lucide-react";
import moment from "moment";

const MilestoneSection = ({ project }) => {
  return (
    <div className=" mt-5 pb-12 gap-4">
      <Card className="h-full w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Milestone <Milestone />{" "}
          </CardTitle>
          <CardDescription>
            All milestones of the ongoing project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            {project?.milestones?.map((item) => {
              return (
                <>
                  <div>
                    <div className="flex justify-between">
                      <ul>
                        <li>
                          <h3>{item.title || "No Title"}</h3>
                        </li>
                        <li
                          className={`text-sm ${
                            item?.isCompleted
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {moment(item?.dueDate).format("lll") || ""}
                        </li>
                      </ul>

                      <ul className="text-right">
                        <li>$ {item?.amount || "No Amount"}</li>
                        <li
                          className={`text-sm  ${
                            item?.isCompleted
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {item?.isCompleted ? "Completed" : "No Completed"}
                        </li>
                      </ul>
                    </div>
                    <Separator className="mt-5" />
                    <p className="text-sm mt-3">
                      {item?.description || "No Descrtiption"}
                    </p>
                  </div>
                  <Separator className="mt-5" />
                </>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MilestoneSection;
