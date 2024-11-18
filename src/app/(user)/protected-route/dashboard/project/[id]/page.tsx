import DashboardLayout from "@/components/ui/dashboard-layout";
import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { projectApi } from "@/service/project";
import Project from "./project";

async function page({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  // Prefetch the first page of data
  await queryClient.prefetchQuery({
    queryKey: ["projects", params.id],
    queryFn: () => projectApi.getOne(params?.id),
  });

  return (
    <div className="bg-black">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Project id={params.id} />
      </HydrationBoundary>
    </div>
  );
}

export default page;
