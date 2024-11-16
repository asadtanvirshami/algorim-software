"use client";

import { projectApi } from "@/service/project";
import { useQuery } from "@tanstack/react-query";
import DetailSection from "./detail-section";

const Project = ({ id }: { id: string }) => {
  console.log(id);

  const { data: project, isLoading, error } = useProject(id);
  console.log(project,'proj');

  if (isLoading) return <p>Loading project...</p>;
  if (error) return <p>Failed to load project. Please try again later.</p>;

  return (
    <div className="h-screen p-5">
      <DetailSection project={project} />
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
