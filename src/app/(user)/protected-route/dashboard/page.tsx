import DashboardLayout from "@/components/ui/dashboard-layout";
import React from "react";
import Projects from "./projects-section/projects";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { projectApi } from "@/service/project";

async function page() {
  const queryClient = new QueryClient();

  // Prefetch the first page of data
  await queryClient.prefetchQuery({
    queryKey: ["projects", 1, 8], // Page 1 and page size 8
    queryFn: () => projectApi.getAll(1, 8, "", "35dc6896-855c-4d56-9f3c-3096c6f710fb"),
  });

  return (
    <div className="">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DashboardLayout>
          <Projects initialPage={1} initialPageSize={8} />
        </DashboardLayout>
      </HydrationBoundary>
    </div>
  );
}

export default page;
