import React, { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Sidebar from "@/components/partials/sidebar";
import TopHeader from "@/components/partials/TopHeader";
import Loading from "@/components/ui/Loading";

import useWidth from "@/hooks/useWidth";
import useSidebar from "@/hooks/useSidebar";
import useMenuLayout from "@/hooks/useMenuLayout";
import useMobileMenu from "@/hooks/useMobileMenu";

const Layout = ({ userVerificationData }) => {
  const { width, breakpoints } = useWidth();
  const [collapsed] = useSidebar();
  const [menuType] = useMenuLayout();
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  const location = useLocation();

  const switchHeaderClass = () => {
    if (menuType === "horizontal") {
      return "ltr:ml-0 rtl:mr-0";
    } else if (collapsed) {
      return "ltr:ml-[72px] rtl:mr-[72px]";
    } else {
      return "ltr:ml-[248px] rtl:mr-[248px]";
    }
  };

  useEffect(() => {
    if (location.pathname !== "/subscription/error") {
      //fetchSubscription();
    }
  }, [location]);

  return (
    <>
      {menuType === "vertical" && (
        <div className="flex">
          <Sidebar />
        </div>
      )}

      {width < breakpoints.md && mobileMenu && (
        <div
          className="overlay bg-slate-900/50 backdrop-filter backdrop-blur-sm opacity-100 fixed inset-0 z-999"
          onClick={() => setMobileMenu(false)}
        ></div>
      )}

      <div
        className={`content-wrapper transition-all duration-150 ${
          width > 768 ? switchHeaderClass() : ""
        }`}
      >
        <div className="pt-2 pl-6 pr-6 pb-2 sticky top-0 z-950 bg-[#FFF] border-b border-slate-200 dark:bg-slate-800 dark:border-slate-700">
          {<TopHeader userVerificationData={userVerificationData} />}
        </div>

        <div className="page-content page-min-height ">
          <div
            className={width > 768 ? "container mx-auto" : "container-fluid"}
          >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
