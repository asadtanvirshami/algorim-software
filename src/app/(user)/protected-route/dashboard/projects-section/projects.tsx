"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { projectApi } from "@/service/project";
import ProjectCard from "@/components/ui/project-card";
import { Loader2, PlusCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectForm } from "./form/create";

type Props = {
  initialPage: number;
  initialPageSize: number;
};

const Projects = ({ initialPage, initialPageSize }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [query, setQuery] = useState({
    active: 0,
    status: "",
    page: initialPage,
    pageSize: initialPageSize,
  });
  const user = useSelector((state: any) => state.user.user);

  const { data, error, isLoading } = useQuery({
    queryKey: ["projects", query.page, query.pageSize, query.status, user?.sub],
    enabled: user != null,
    queryFn: () =>
      projectApi.getAll(query.page, query.pageSize, query.status, user?.sub),
  });

  const [projects, setProjects] = useState([]);
  const totalPages = Math.ceil(data?.total / query.pageSize);

  React.useEffect(() => {
    if (data?.data) {
      setProjects(data.data);
    }
  }, [data]);

  const handlePreviousPage = () => {
    if (query.page > 1) {
      setQuery((prev) => ({ ...prev, page: prev.page - 1 }));
    }
  };

  const handleNextPage = () => {
    setQuery((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setQuery((prev) => ({ ...prev, page: pageNumber }));
    }
  };

  if (isLoading || !data) {
    return (
      <div className="flex justify-center mt-5 gap-4 h-screen ">
        <Loader2 className="h-96 animate-spin" color="blue" />
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="h-screen bg-white">
        <div className="flex justify-end m-5">
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold"
          >
            Start Project <PlusCircle />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-4 justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
          {projects.length === 0 && (
            <h1 className="text-center text-2xl font-bold">
              No projects found
            </h1>
          )}
        </div>
        <div className="flex justify-end mt-4 gap-4">
          <button onClick={handlePreviousPage} disabled={query.page === 1}>
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={page === query.page ? "font-bold" : ""}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={query.page === totalPages}>
            Next
          </button>
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-h-[900px] overflow-y-auto text-left"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-md text-left">Project Creation</DialogTitle>
            {<ProjectForm setStep={setStep} />}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Projects;
