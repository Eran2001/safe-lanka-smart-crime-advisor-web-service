import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import NavBar from "@/components/partials/NavBar";
import Footer from "@/components/partials/Footer";
import Loading from "@/components/ui/Loading";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-10">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[500px]">
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

export default AuthLayout;
