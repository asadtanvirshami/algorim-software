import DashboardLayout from "@/components/ui/dashboard-layout";
import ProjectCard from "@/components/ui/project-card";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
