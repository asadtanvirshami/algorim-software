import React from "react";
import DashboardLayout from "@/components/ui/dashboard-layout";
import Projects from "./projects-section/projects";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { projectApi } from "@/service/project";
import { cookies } from "next/headers";
import { authApi } from "@/service/auth";
import { redirect } from "next/navigation";

async function page() {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");
  const token = cookieStore.get("token");

  if (!userCookie || !token) {
    return redirect("/auth/signin"); // If cookies or token not found, return nothing
  }

  const parsedCookie = JSON.parse(userCookie.value);

  // Prefetch data for the projects page
  await queryClient.prefetchQuery({
    queryKey: ["projects", 1, 8], // Page 1 and page size 8
    queryFn: () => projectApi.getAll(1, 8, "", parsedCookie?.sub),
  });

  if (token) {
    try {
      const session = await authApi.verfication(token.value);
      if (session.status !== 200) {
        redirect("/auth/signin");
        return;
      }
    } catch (error) {
      console.error("Verification failed:", error);
      redirect("/auth/signin");
      return;
    }
  }

  return (
    <div className="w-full h-full bg-white">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DashboardLayout>
          <Projects initialPage={1} initialPageSize={8} />
        </DashboardLayout>
      </HydrationBoundary>
    </div>
  );
}

export default page;
