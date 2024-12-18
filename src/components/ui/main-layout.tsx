import Navbar from "./navbar";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./footer";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
  navCollapsedSize?: number;
}

const MainLayout = ({ children }: LayoutProps) => {
  const path = usePathname();

  // Define cursor settings
  const cursorSettings: {
    target: string;
    innerSize: number;
    outerSize: number;
    color: string;
    outerAlpha: number;
    innerScale: number;
    outerScale: number;
  } = {
    target: ".cursor",
    innerSize: 12,
    outerSize: 12,
    color: "255, 165, 0",
    outerAlpha: 0.3,
    innerScale: 0.7,
    outerScale: 5,
  };

  // Determine if the current path is for auth pages
  const isAuthPath = path === "/auth/signin" || path === "/auth/signup";
  const iLoadingPage = path === "/";
  const isProtectedRoute = path.startsWith("/protected-route");

  return (
    <>
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
          },
        ]}
      />

      {/* Conditionally render Navbar and Footer based on the current path */}
      {!isAuthPath && !iLoadingPage && !isProtectedRoute && <Navbar />}
      {children}
      {!isAuthPath && !iLoadingPage && !isProtectedRoute && <Footer />}
    </>
  );
};

export default MainLayout;
