import Navbar from "./navbar";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./footer";
import { usePathname } from "next/navigation";
import { GoogleOAuthProvider } from "@react-oauth/google";
interface LayoutProps {
  children: React.ReactNode;
  navCollapsedSize?: number;
}

const MainLayout = ({ children }: LayoutProps) => {
  const path = usePathname();

  // Determine if the current path is for auth pages
  const isAuthPath = path === "/auth/signin" || path === "/auth/signup";
  const isProtectedRoute = path.startsWith("/protected-route");

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      {/* Conditionally render Navbar and Footer based on the current path */}
      {!isAuthPath && !isProtectedRoute && <Navbar />}
      {children}
      {!isAuthPath && !isProtectedRoute && <Footer />}
    </GoogleOAuthProvider>
  );
};

export default MainLayout;
