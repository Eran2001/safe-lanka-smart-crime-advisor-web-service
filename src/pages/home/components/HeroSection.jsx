import React, { useState } from "react";

import MapRoundedIcon from "@mui/icons-material/MapRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

import Drawer from "@/components/ui/Drawer";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* LEFT CONTENT */}
              <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mx-auto lg:mx-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  AI-Powered Policing
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary dark:text-white leading-[1.15]">
                  SafeLanka <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-blue-500">
                    Smart Crime Advisor
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Advanced predictive analytics and real-time visualization to
                  identify high-risk zones. Empowering Sri Lanka Police with
                  data-driven insights for a safer tomorrow.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => setOpen(true)}
                    className="w-full sm:w-auto px-8 py-4 bg-primary-500 hover:bg-primary-700 text-white rounded-xl font-bold shadow-xl shadow-blue-700/20 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                  >
                    Register Now
                    <ChevronRightRoundedIcon className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 hover:border-blue-200 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-xl font-bold transition-all">
                    Learn More
                  </button>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="lg:w-1/2 w-full perspective-1000">
                <div className="relative w-full max-w-lg mx-auto lg:mr-0 lg:ml-auto transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative z-20">
                    <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="ml-4 bg-white px-3 py-1 rounded text-[10px] text-slate-400 font-mono shadow-sm border border-slate-100 w-full max-w-[200px]">
                        admin.safelanka.gov/dashboard
                      </div>
                    </div>

                    <div className="p-1 bg-slate-50 min-h-[300px] relative overflow-hidden group">
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <svg
                          viewBox="0 0 200 200"
                          className="w-full h-full text-blue-900 fill-current"
                        >
                          <path
                            d="M45.5,-76.3C58.9,-69.3,69.6,-59.1,78.3,-47.8C87,-36.5,93.6,-24,92.6,-11.9C91.6,0.3,82.9,12.1,73.6,23.3C64.3,34.5,54.4,45.1,43.4,54.7C32.4,64.3,20.2,72.9,6.7,75.4C-6.8,77.9,-21.7,74.3,-35.1,67.2C-48.6,60.1,-60.6,49.5,-69.1,36.7C-77.6,23.9,-82.7,8.9,-80.7,-5.1C-78.7,-19.1,-69.6,-32.1,-58.5,-42.6C-47.3,-53.1,-34.1,-61,-20.9,-68.1C-7.8,-75.2,5.3,-81.4,18.8,-81.4"
                            transform="translate(100 100)"
                          />
                        </svg>
                      </div>

                      <div className="relative z-10 grid grid-cols-2 gap-2 p-4">
                        <div className="col-span-2 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="text-xs font-bold text-slate-700 flex items-center gap-1">
                              <MapRoundedIcon
                                fontSize="inherit"
                                sx={{ fontSize: 14 }}
                              />
                              Live Risk Map
                            </h3>
                            <span className="text-[10px] text-red-500 font-bold bg-red-50 px-1.5 py-0.5 rounded">
                              High Risk Detected
                            </span>
                          </div>

                          <div className="h-32 bg-slate-100 rounded-lg relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                            <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-amber-400 rounded-full"></div>
                            <div className="absolute top-10 right-10 w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                        </div>

                        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xs font-bold text-slate-700">
                              Crime Trend
                            </h3>
                            <BarChartRoundedIcon
                              sx={{ fontSize: 14 }}
                              className="text-slate-400"
                            />
                          </div>

                          <div className="flex items-end gap-1 h-12">
                            <div className="w-1/5 bg-blue-100 h-[40%] rounded-sm"></div>
                            <div className="w-1/5 bg-blue-200 h-[60%] rounded-sm"></div>
                            <div className="w-1/5 bg-blue-300 h-[50%] rounded-sm"></div>
                            <div className="w-1/5 bg-blue-400 h-[80%] rounded-sm"></div>
                            <div className="w-1/5 bg-red-500 h-[90%] rounded-sm"></div>
                          </div>

                          <p className="text-[10px] text-slate-500 mt-1">
                            Prediction:{" "}
                            <span className="font-bold text-red-500">
                              Increasing
                            </span>
                          </p>
                        </div>

                        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 bg-green-100 text-green-700 rounded-lg">
                              <ShowChartRoundedIcon sx={{ fontSize: 16 }} />
                            </div>

                            <div>
                              <p className="text-[10px] text-slate-500">
                                System Status
                              </p>
                              <p className="text-xs font-bold text-green-600">
                                Active
                              </p>
                            </div>
                          </div>

                          <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[98%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -right-6 top-12 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl border border-slate-100 z-30 animate-bounce"
                    style={{ animationDuration: "3s" }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 p-1.5 rounded-full text-red-600">
                        <WarningAmberRoundedIcon sx={{ fontSize: 16 }} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">
                          Alert: Colombo North
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Predicted Risk: High (89%)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -left-6 bottom-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl border border-slate-100 z-30 flex items-center gap-2">
                    <div className="bg-blue-100 p-1 rounded-full text-blue-600">
                      <LockRoundedIcon sx={{ fontSize: 12 }} />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">
                      AES-256 Secured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-100 bg-white py-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Real-time Heatmaps", icon: MapRoundedIcon },
                { label: "Trend Prediction", icon: BarChartRoundedIcon },
                { label: "Detailed Reports", icon: DescriptionRoundedIcon },
                { label: "Secure Access", icon: LockRoundedIcon },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2 text-slate-500"
                >
                  <feature.icon
                    className="text-blue-600"
                    sx={{ fontSize: 20 }}
                  />
                  <span className="text-sm font-semibold">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

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
