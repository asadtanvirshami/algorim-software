import DashboardLayout from "@/components/ui/dashboard-layout";
import React from "react";
import Projects from "./projects-section/projects";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { projectApi } from "@/service/project";
import { cookies } from "next/headers";

async function page() {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie) return null; // If no cookie found, return null

  const parsedCookie = JSON.parse(userCookie.value);
  console.log(parsedCookie?.sub);

  // Prefetch the first page of data
  await queryClient.prefetchQuery({
    queryKey: ["projects", 1, 8], // Page 1 and page size 8
    queryFn: () => projectApi.getAll(1, 8, "", parsedCookie?.sub),
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
