import React from "react";
import Navbar from "./navbar";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
  navCollapsedSize?: number; 
}
const MainLayout = ({ children }: LayoutProps) => {
  const cursorSettings:any = {
    target: ".cursor", 
    innerSize: 12,
    outerSize: 12,
    color: "255, 165, 0", 
    outerAlpha: 0.3,
    innerScale: 0.7,
    outerScale: 5,
  };
  return (
    <React.Fragment>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="255, 165, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: cursorSettings,
          } as any
        ]}
      />
      <Navbar />
      {children}
      <Footer/>
    </React.Fragment>
  );
};

export default MainLayout;
