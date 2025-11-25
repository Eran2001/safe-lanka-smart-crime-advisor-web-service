import React, { lazy, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AccessExpireModal from "@/components/AccessExpireModal";

import DefaultLayout from "@/layouts/DefaultLayout";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import API from "@/services/index";
import token from "@/lib/utilities";

// auth routes
const LoginPage = lazy(() => import("./pages/auth/login"));
const RegisterPage = lazy(() => import("./pages/auth/register"));
const ResetPassword = lazy(() => import("./pages/auth/reset-password"));
const ForgetPassword = lazy(() => import("./pages/auth/forgot-password"));

// default routes
const HomePage = lazy(() => import("./pages/home"));
const AboutPage = lazy(() => import("./pages/about"));
const BlogPage = lazy(() => import("./pages/blog"));
const GuidePage = lazy(() => import("./pages/guide"));

// protected routes
const AdminDashboard = lazy(() => import("./pages/dashboard/admin"));
const AnalystDashboard = lazy(() => import("./pages/dashboard/analyst"));
const OfficerDashboard = lazy(() => import("./pages/dashboard/officer"));
const ResearcherDashboard = lazy(() => import("./pages/dashboard/researcher"));
const SupervisorDashboard = lazy(() => import("./pages/dashboard/supervisor"));

function App() {
  const navigate = useNavigate();
  const [userVerificationData, setUserVerificationData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkUserDetails = () => {
    const path = window.location.pathname;
    const authToken = token.getAuthToken();
    const userData = token.getUserData();

    if (!authToken || !userData) {
      setIsAuthenticated(false);
      setUserVerificationData(null);
      navigate("/login");
    } else {
      setIsAuthenticated(true);
      fetchVerification();
    }
  };

  const fetchVerification = async () => {
    try {
      const authToken = token.getAuthToken();
      const userData = token.getUserData();

      if (!authToken || !userData) {
        navigate("/login");
        return;
      }

      const response = await API.private.auth_verify();

      if (response.data.code !== "OK") {
        token.clear();
        navigate("/login");
        return;
      }

      switch (userData.role) {
        case "admin":
          navigate("/dashboard/admin");
          break;

        case "officer":
          navigate("/dashboard/officer");
          break;

        case "analyst":
          navigate("/dashboard/analyst");
          break;

        default:
          navigate("/login");
      }
    } catch (err) {
      navigate("/login");
    }
  };

  // const checkUserDetails = () => {
  //   const path = window.location.pathname;
  //   const authToken = token.getAuthToken();
  //   const userData = token.getUserData();

  //   if (!authToken || !userData) {
  //     setIsAuthenticated(false);
  //     setUserVerificationData(null);
  //     token.setSubscription(null);
  //     if (
  //       path === "/" ||
  //       !(
  //         path.includes("/register") ||
  //         path.includes("/signup") ||
  //         path.includes("/forgot-password") ||
  //         path.includes("/verify/email") ||
  //         path.includes("/password-reset") ||
  //         path.includes("/logout")
  //       )
  //     ) {
  //       navigate("/login");
  //     }
  //   } else {
  //     setIsAuthenticated(true);
  //     fetchVerification();
  //     if (path === "/") {
  //       navigate("/dashboard");
  //     }
  //   }
  // };

  // const fetchVerification = async () => {
  //   try {
  //     const authToken = token.getAuthToken();
  //     const userData = token.getUserData();

  //     if (!authToken || !userData) {
  //       setIsAuthenticated(false);
  //       setUserVerificationData(null);
  //       token.setSubscription(null);
  //       navigate("/subscription/error");
  //     }

  //     if (authToken && userData) {
  //       setIsAuthenticated(true);
  //     }

  //     const response = await API.private.subscription_getSubscriptionAbstract(
  //       userData.tenantCode
  //     );

  //     if (response.data.code === "OK") {
  //       setUserVerificationData(response.data.data);
  //       token.setSubscription(response.data.data);
  //       if (response.data.data.invoice.status === "D") {
  //         navigate("/setting/payments");
  //       }
  //     }
  //   } catch (error) {
  //     navigate("/subscription/error");
  //   }
  // };

  // useEffect(() => {
  //   checkUserDetails();
  // }, []);

  // useEffect(() => {
  //   if (isAuthenticated && (!userVerificationData || userVerificationData === null)) {
  //     fetchVerification();
  //   }
  // }, [userVerificationData]);

  return (
    <main className="App relative">
      <Routes>
        {/* default Routes */}
        <Route
          path="/*"
          element={<DefaultLayout userVerificationData={fetchVerification} />}
        >
          <Route
            index
            element={<HomePage userVerificationData={fetchVerification} />}
          />
          <Route
            path="about"
            element={<AboutPage userVerificationData={fetchVerification} />}
          />
          <Route
            path="blog"
            element={<BlogPage userVerificationData={fetchVerification} />}
          />
          <Route
            path="guide"
            element={<GuidePage userVerificationData={fetchVerification} />}
          />
        </Route>

        {/* auth Routes */}
        <Route path="/*" element={<AuthLayout />}>
          <Route
            path="login"
            element={
              <LoginPage
                userVerificationData={fetchVerification}
                checkUserDetails={checkUserDetails}
              />
            }
          />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgetPassword />} />
          <Route
            path="password-reset"
            element={<ResetPassword fetchVerification={fetchVerification} />}
          />
        </Route>

        {/* protected Routes */}
        <Route
          path="/*"
          // element={<DashboardLayout userVerificationData={fetchVerification} />}
        >
          <Route
            path="dashboard/admin"
            element={
              <AdminDashboard userVerificationData={fetchVerification} />
            }
          />
          <Route
            path="dashboard/analyst"
            element={
              <AnalystDashboard userVerificationData={fetchVerification} />
            }
          />
          <Route
            path="dashboard/officer"
            element={
              <OfficerDashboard userVerificationData={fetchVerification} />
            }
          />
          <Route
            path="dashboard/researcher"
            element={
              <ResearcherDashboard userVerificationData={fetchVerification} />
            }
          />
          <Route
            path="dashboard/supervisor"
            element={
              <SupervisorDashboard userVerificationData={fetchVerification} />
            }
          />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeButton={true}
        hideProgressBar={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={true}
        newestOnTop={true}
        theme="colored"
      />

      {userVerificationData && userVerificationData.trial && (
        <AccessExpireModal
          userVerificationData={userVerificationData}
          isAuthenticated={isAuthenticated}
        />
      )}
    </main>
  );
}

export default App;
