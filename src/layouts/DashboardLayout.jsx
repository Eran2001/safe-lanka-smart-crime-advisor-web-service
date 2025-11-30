import React, { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Sidebar from "@/components/partials/Sidebar";
import TopHeader from "@/components/partials/TopHeader";
import Loading from "@/components/ui/Loading";

const DashboardLayout = ({ userVerificationData }) => {
  const location = useLocation();

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopHeader userVerificationData={userVerificationData} />

        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[500px]">
                <Loading />
              </div>
            }
          >
            <motion.div
              key={location.pathname}
              initial="pageInitial"
              animate="pageAnimate"
              exit="pageExit"
              variants={{
                pageInitial: {
                  opacity: 0,
                  y: 50,
                },
                pageAnimate: {
                  opacity: 1,
                  y: 0,
                },
                pageExit: {
                  opacity: 0,
                  y: -50,
                },
              }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.5,
              }}
            >
              {<Outlet />}
            </motion.div>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
