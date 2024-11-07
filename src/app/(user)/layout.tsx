"use client"

import React from "react";
import MainLayout from "../../components/ui/main-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}

