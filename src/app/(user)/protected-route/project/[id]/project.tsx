"use client";

import { projectApi } from "@/service/project";
import { useQuery } from "@tanstack/react-query";
import DetailSection from "./detail-section";
import InfoSection from "./info-section";
import MilestoneSection from "./milestone-section";
import { Loader2 } from "lucide-react";

const Project = ({ id }: { id: string }) => {
  const { data: project, isLoading, error } = useProject(id);

  if (isLoading)
    return (
      <div className="flex justify-center mt-5 gap-4 h-screen ">
        <Loader2 className="h-96 animate-spin" color="blue" />
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center mt-5 gap-4 h-screen ">
        <p>Failed to load project. Please try again later.</p>;
      </div>
    );

  return (
    <div className=" p-12 flex justify-center font-[family-name:var(--font-redhat)]">
      <div className="container w-fit">
        <DetailSection project={project} />
        <InfoSection project={project} />
        <MilestoneSection project={project} />
      </div>
      {/* Add more fields as necessary */}
    </div>
  );
};
export default Project;

function useProject(id: string) {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => projectApi.getOne(id),
  });
}
