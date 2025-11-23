import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loading from "@/components/ui/Loading";

const AuthLayout = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>{<Outlet />}</Suspense>
    </>
  );
};

export default AuthLayout;
