"use client"
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { projectApi } from "@/service/project";
import ProjectCard from "@/components/ui/project-card";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

type Props = {
  initialPage: number;
  initialPageSize: number;
};

const Projects = ({ initialPage, initialPageSize }: Props) => {
  const [query, setQuery] = useState({
    active: 0,
    status: "",
    page: initialPage,
    pageSize: initialPageSize,
  });

  const user = useSelector((state: any) => state.user.user);
  
  const {
    data,
    error,
    isLoading,
    refetch: refetchStatus,
  } = useQuery({
    queryKey: ["projects", query.page, query.pageSize, query.status, user?.sub],
    enabled: user != null,
    queryFn: () =>
      projectApi.getAll(query.page, query.pageSize, query.status, user?.sub),
  });

  const totalPages = Math.ceil(data?.total / query.pageSize);

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
        <Loader2 className="h-96 animate-spin" color="red" />
      </div>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-4 justify-center">
        {data?.data?.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-4">
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
    </>
  );
};

export default Projects;
