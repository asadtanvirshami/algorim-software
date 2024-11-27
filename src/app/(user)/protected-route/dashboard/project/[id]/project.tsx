"use client";

import { projectApi } from "@/service/project";
import { useQuery } from "@tanstack/react-query";
import DetailSection from "./detail-section";
import InfoSection from "./info-section";
import MilestoneSection from "./milestone-section";

const Project = ({ id }: { id: string }) => {
  console.log(id);

  const { data: project, isLoading, error } = useProject(id);
  console.log(project, "proj");

  if (isLoading) return <p>Loading project...</p>;
  if (error) return <p>Failed to load project. Please try again later.</p>;

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
