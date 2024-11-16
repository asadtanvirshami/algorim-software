import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Progress } from "./progress";
import { Button } from "./button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge } from "./badge";
import { getColor } from "@/utils/get-color";
import Link from "next/link";

const ProjectCard = ({ data }: any) => {
  console.log(data);

  return (
    <Card className="shadow-lg font-[family-name:var(--font-redhat)]">
      <CardHeader className="flex flex-row  justify-between items-center">
        <div className="flex items-center gap-3">
          <Progress
            value={data?.projectInfos?.completion_percentage}
            size={40}
          />

          <CardTitle>{data?.title || ""}</CardTitle>
        </div>
        <Badge>{data?.serial_number || ""}</Badge>
      </CardHeader>
      <CardContent className="space-y-5">
        <dl className="text-sm">{data?.description || ""}</dl>
        <span className="flex items-center gap-2 text-sm">
          <label>Approval:</label>
          <Badge variant={data?.approved ? "green_gradient" : "red_gradient"}>
            {data?.approved ? "Approved" : "Un approved"}
          </Badge>
        </span>
        <span className="flex items-center gap-2 text-sm">
          <label>Status:</label>
          <Badge
            variant={
              data?.status === "in progress" ? "aqua_gradient" : "aqua_gradient"
            }
          >
            {data?.status === "on hold" ? data?.status : ""}
          </Badge>
        </span>
      </CardContent>

      <div className="flex justify-end p-4">
        <Button variant="outline">
          <Link href={`/protected-route/dashboard/project/${data?.id}`}>View Info</Link>
          <ArrowTopRightIcon />
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
