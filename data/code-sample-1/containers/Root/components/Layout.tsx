import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Footer } from "src/components/Footer.tsx";
import { PageNavbar } from "src/components/PageNavbar.tsx";

export function Layout({}) {
  return (
    <div
      className={`
        flex min-h-screen w-full flex-col 
        bg-[radial-gradient(ellipse_90%_50%_at_50%_10%,_var(--tw-gradient-stops))] 
        from-md-sys-light-surface-container-lowest to-md-sys-light-surface-container
        bg-contain bg-no-repeat bg-top
      `}
    >
      <PageNavbar />
      <main className="w-full flex flex-col flex-1 items-center justify-start">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}
