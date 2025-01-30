import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Progress } from "./progress";
import { Button } from "./button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge } from "./badge";
import Link from "next/link";
import { Separator } from "./separator";

const ProjectCard = ({ data }: any) => {
  return (
    <Card className="shadow-lg font-[family-name:var(--font-redhat)]">
      <CardHeader className="flex flex-row  justify-between items-center">
        <div className="flex items-center gap-3">
          <Progress
            value={data?.projectInfos[0]?.completion_percentage || "0"}
            size={40}
          />

          <CardTitle>{data?.title || ""}</CardTitle>
        </div>
        <Badge>{data?.serial_number || ""}</Badge>
      </CardHeader>
      <Separator></Separator>
      <CardContent className="space-y-5 mt-4">
        <dl className="text-sm">
          {data?.description
            ? `${data.description.slice(0, 100)}${
                data.description.length > 100 ? "..." : ""
              }`
            : ""}
        </dl>
        <span className="flex items-center gap-2 text-sm">
          <label>Approval:</label>
          <Badge
            className="text-white"
            variant={data?.approved ? "green_gradient" : "red_gradient"}
          >
            {data?.approved ? "Approved" : "Un approved"}
          </Badge>
        </span>
        <span className="flex items-center gap-2 text-sm">
          <label>Status:</label>
          <Badge
            className="text-white"
            variant={
              data?.status === "in progress" ? "aqua_gradient" : "aqua_gradient"
            }
          >
            {data?.status}
          </Badge>
        </span>
      </CardContent>

      <div className="flex justify-end p-4">
        <Button variant="outline" className="bg-blue-500 text-white">
          <Link href={`/protected-route/project/${data?.id}`}>View Info</Link>
          <ArrowTopRightIcon />
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
