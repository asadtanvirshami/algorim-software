import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Progress } from "./progress";
import { Button } from "./button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge } from "./badge";

const ProjectCard = ({ data }: any) => {
  return (
    <Card className="shadow-lg font-[family-name:var(--font-redhat)]">
      <CardHeader className="flex flex-row  justify-between items-center">
        <div className="flex items-center gap-3">
          <Progress
            value={20}
            color={
              "red"
              // data.ProjectDetail.progress < 20
              //   ? "danger"
              //   : data.ProjectDetail.progress < 30
              //   ? "danger"
              //   : data.ProjectDetail.progress < 50
              //   ? "warning"
              //   : data.ProjectDetail.progress < 60
              //   ? "secondary"
              //   : data.ProjectDetail.progress == 100
              //   ? "success"
              //   : data.ProjectDetail.status === "In progress"
              //   ? "primary"
              //   : data.ProjectDetail.status === "Paused"
              //   ? "danger"
              //   : "default"
            }
          />
          <CardTitle>Ecommerce Project</CardTitle>
        </div>
        <Badge>#2157</Badge>
      </CardHeader>
      <CardContent className="space-y-5">
        <dl className="text-sm">
          Algorim is an innovative IT company specializing in cutting-edge
          solutions across blockchain, artificial intelligence, cybersecurity,
          and full-stack development
        </dl>
        <span className="flex items-center gap-2">
          <label>Status:</label>
          <Badge variant="destructive">Approved</Badge>
        </span>
      </CardContent>

      <div className="flex justify-end p-4">
        <Button variant="outline">
          View
          <ArrowTopRightIcon />
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
