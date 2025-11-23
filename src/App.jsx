import React, { lazy, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AccessExpireModal from "@/components/AccessExpireModal";

import DefaultLayout from "@/layout/DefaultLayout";
import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import API from "@/services/index";
import token from "@/lib/utilities";

const LoginPage = lazy(() => import("./pages/auth/login"));

function App() {
  const navigate = useNavigate();
  const [userVerificationData, setUserVerificationData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkUserDetails = () => {
    //
  };

  const fetchVerification = () => {
    //
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
          <Route path="signup" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgetPassword />} />
          <Route path="verify/email" element={<VerifyUser />} />
          <Route
            path="password-reset"
            element={<NewPassword fetchVerification={fetchVerification} />}
          />
          <Route path="logout" element={<LogoutPage />} />
        </Route>
        <Route
          path="/*"
          element={<DefaultLayout userVerificationData={fetchVerification} />}
        >
          <Route
            path="ai-copilot"
            element={<AICopilot userVerificationData={fetchVerification} />}
          />
        </Route>

        {/* Authenticated Routes */}
        <Route
          path="/*"
          element={<DashboardLayout userVerificationData={fetchVerification} />}
        >
          <Route
            path="ai-copilot"
            element={<AICopilot userVerificationData={fetchVerification} />}
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
