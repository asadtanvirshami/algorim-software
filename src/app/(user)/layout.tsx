"use client"

import React from "react";
import { usePathname } from "next/navigation";
import MainLayout from "../../components/ui/main-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <MainLayout>{children}</MainLayout>;
}

