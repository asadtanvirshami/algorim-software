import DashboardLayout from "@/components/ui/dashboard-layout";
import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { projectApi } from "@/service/project";
import Project from "./project";
import { cookies } from "next/headers";
import { authApi } from "@/service/auth";
import { redirect } from "next/navigation";

async function page({ params }: { params: { id: string } }) {
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
      console.log(session, "SESSION");
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
  // Prefetch the first page of data
  await queryClient.prefetchQuery({
    queryKey: ["projects", params.id],
    queryFn: () => projectApi.getOne(params?.id),
  });

  return (
    <div className="">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Project id={params.id} />
      </HydrationBoundary>
    </div>
  );
}

export default page;
