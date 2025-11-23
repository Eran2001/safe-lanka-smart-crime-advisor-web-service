import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loading from "@/components/ui/Loading";

const AuthLayout = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[500px]">
            <Loading />
          </div>
        }
      >
        {<Outlet />}
      </Suspense>
    </>
  );
};

export default AuthLayout;
