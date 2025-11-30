import React, { useState } from "react";

import MapRoundedIcon from "@mui/icons-material/MapRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

import Drawer from "@/components/ui/Drawer";

import GroupChart from "./GroupChart";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[90vh] lg:pt-20 lg:pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-slate-500 border border-primary-100 dark:border-slate-100 text-primary-700 dark:text-white text-xs font-bold tracking-wide uppercase mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500 dark:bg-slate-100"></span>
                </span>
                AI-Powered Policing
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-700 leading-[1.15]">
                SafeLanka <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-500 to-primary-700 dark:from-slate-700 dark:to-slate-900">
                  Smart Crime Advisor
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-500 dark:text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Advanced predictive analytics and real-time visualization to
                identify high-risk zones. Empowering Sri Lanka Police with
                data-driven insights for a safer tomorrow.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-primary-500 dark:bg-slate-700 dark:hover:bg-slate-900 hover:bg-primary-700 text-white rounded-xl font-bold shadow-xl shadow-primary-700/20 dark:shadow-slate-700/20 hover:shadow-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Register Now
                  <ChevronRightRoundedIcon className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="w-full sm:w-auto px-8 py-4 bg-white dark:text-slate-900 border-2 border-primary-200 dark:border-slate-700 hover:border-primary-300 hover:bg-primary-100 text-muted-700 hover:text-primary-700 rounded-xl font-bold transition-all cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full relative perspective-1000">
              <div className="relative w-full mx-auto transform lg:rotate-y-6 lg:rotate-x-2 transition-transform duration-500 hover:rotate-0 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-md text-xs text-slate-400 w-48">
                      <SearchRoundedIcon sx={{ fontSize: 16 }} />
                      <span>Search Division...</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <NotificationsNoneRoundedIcon
                        className="text-slate-400"
                        sx={{ fontSize: 20 }}
                      />
                      <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                    </div>
                    <div className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                      A
                    </div>
                  </div>
                </div>

                <div className="flex h-[500px]">
                  <div className="w-16 bg-slate-50 dark:bg-slate-800/50 border-r border-muted-100 dark:border-slate-800 flex flex-col items-center py-6 gap-6">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer 
                    bg-blue-100 text-blue-600 dark:hover:text-white shadow-sm
                    hover:bg-blue-200 dark:hover:bg-blue-300/20"
                    >
                      <GridViewRoundedIcon sx={{ fontSize: 20 }} />
                    </div>

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer
                    text-slate-400 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-white/10"
                    >
                      <MapRoundedIcon sx={{ fontSize: 20 }} />
                    </div>

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer
                    text-slate-400 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-white/10"
                    >
                      <BarChartRoundedIcon sx={{ fontSize: 20 }} />
                    </div>

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer
                    text-slate-400 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-white/10"
                    >
                      <PeopleAltRoundedIcon sx={{ fontSize: 20 }} />
                    </div>

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer
                    text-slate-400 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-white/10"
                    >
                      <DescriptionRoundedIcon sx={{ fontSize: 20 }} />
                    </div>

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer
                    text-slate-400 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-white/10"
                    >
                      <LockRoundedIcon sx={{ fontSize: 20 }} />
                    </div>
                  </div>

                  <div className="flex-1 bg-slate-50/50 dark:bg-slate-900 relative overflow-hidden p-6">
                    <div
                      className="absolute inset-0 opacity-[0.03] dark:opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(#000 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    ></div>

                    <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
                      <div className="col-span-2 sm:col-span-1 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-4 relative overflow-hidden group">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xs font-bold text-slate-700 dark:text-slate-200">
                            Live Heatmap
                          </h3>
                          <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded font-bold">
                            HIGH RISK
                          </span>
                        </div>

                        <div className="h-40 w-full bg-slate-100 dark:bg-slate-700/50 rounded-lg relative">
                          <div className="absolute top-1/2 right-1/3">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                            <div className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></div>
                          </div>
                          <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-amber-400 rounded-full"></div>
                          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-green-400 rounded-full"></div>

                          <div className="absolute top-[40%] right-[5%] bg-slate-800 text-white text-[9px] px-2 py-1 rounded shadow-lg">
                            Crime Index: 92
                          </div>
                        </div>
                        <div className="mt-3 flex gap-2 overflow-hidden">
                          <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[70%]"></div>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">
                            70% Scanned
                          </span>
                        </div>
                      </div>

                      <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
                        <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-4 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-2">
                            <WhatshotRoundedIcon
                              className="text-orange-500"
                              sx={{ fontSize: 18 }}
                            />
                            <span className="text-xs font-semibold text-slate-500">
                              Predicted Incidents
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-slate-800 dark:text-white">
                            124{" "}
                            <span className="text-xs font-normal text-green-500 ml-1">
                              ↓ 12%
                            </span>
                          </div>
                        </div>

                        <div className="flex-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-4">
                          <h3 className="text-xs font-bold text-slate-700 dark:text-slate-200 mb-3">
                            Recent Alerts
                          </h3>
                          <div className="space-y-3">
                            {[1, 2].map((i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 pb-2 border-b border-slate-50 last:border-0 last:pb-0"
                              >
                                <div className="w-1.5 h-1.5 mt-1 rounded-full bg-red-500"></div>
                                <div>
                                  <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300">
                                    Robbery Alert
                                  </p>
                                  <p className="text-[9px] text-slate-400">
                                    Colombo District • 2m ago
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-4 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">
                            System Efficiency
                          </p>
                          <p className="text-sm font-bold text-blue-600">
                            98.5% Accuracy
                          </p>
                        </div>
                        <div className="flex items-end gap-1 h-8">
                          {[30, 50, 45, 70, 60, 80, 55].map((h, i) => (
                            <div
                              key={i}
                              className="w-2 bg-blue-100 dark:bg-blue-900 rounded-sm"
                              style={{ height: `${h}%` }}
                            ></div>
                          ))}
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">
                            System Efficiency
                          </p>
                          <p className="text-sm font-bold text-blue-600">
                            98.5% Accuracy
                          </p>
                        </div>
                        <div className="flex items-end gap-1 h-8">
                          {[30, 50, 45, 70, 60, 80, 55].map((h, i) => (
                            <div
                              key={i}
                              className="w-2 bg-blue-100 dark:bg-blue-900 rounded-sm"
                              style={{ height: `${h}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* waves */}
        <div className="absolute bottom-0 left-0 w-full opacity-60 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1440 320"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              className="fill-primary-400 dark:fill-slate-900"
              d="M0,160L80,170C160,180,320,200,480,202.7C640,205,800,192,960,170.7C1120,149,1280,117,1360,101.3L1440,85L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1440 320"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              className="fill-primary-500 dark:fill-slate-700"
              d="M0,224L80,224C160,224,320,224,480,202.7C640,181,800,139,960,112C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* bottom card */}
      <GroupChart />

      <Drawer
        activeModal={open}
        onClose={() => setOpen(false)}
        title="User Details"
        themeClass="max-w-[400px]"
      >
        <p>This is the drawer content</p>
      </Drawer>
    </>
  );
};

export default HeroSection;
