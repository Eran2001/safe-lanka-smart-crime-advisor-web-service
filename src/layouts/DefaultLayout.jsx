import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Loading from "@/components/ui/Loading";
import NavBar from "@/components/partials/NavBar";
import Footer from "@/components/partials/Footer";

const DefaultLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-primary text-slate-800">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-10">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[400px]">
              <Loading />
            </div>
          }
        >
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
