import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
  navCollapsedSize?: number; // Optional number representing the size of the collapsed navigation
}
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export default MainLayout;
