import React from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import aboutImg from "../../assets/images/about-us.jpg";
import AIVisual from "../../assets/images/ai-visual.jpg";

import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";

const AboutPage = () => {
  return (
    <section className="relative w-full pt-8 pb-8 px-6 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-8">
          <div className="space-y-8">
            <Badge
              label="Intelligence System"
              className="px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-white bg-primary-500/10 border-none rounded-full"
            />
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Advancing Safety through{" "}
              <span className="text-primary-500">AI</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              SafeLanka is an intelligence ecosystem engineered to bridge the
              gap between historical crime data and proactive public safety.
            </p>
            <div className="flex gap-4 items-center p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 w-fit">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <SpeedRoundedIcon />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Real-time Processing
                </p>
                <p className="text-xs text-slate-500">
                  Live data analytics enabled
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative aspect-video rounded-[2.5rem] bg-slate-200 dark:bg-slate-800 border-8 border-white dark:border-slate-900 shadow-2xl overflow-hidden">
              <img
                src={aboutImg}
                alt="SafeLanka Dashboard Preview"
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card className="p-10 border-none bg-primary text-white rounded-[3rem] shadow-xl md:col-span-1 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 border-15 border-white/10 rounded-full -mr-10 -mt-10" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="dark:text-white text-slate-500 leading-relaxed text-lg">
                To transform traditional reactive policing into a proactive,
                data-driven approach by leveraging historical crime analysis and
                artificial intelligence to enhance patrol planning, crime
                prevention strategies, and community safety across Sri Lanka.
              </p>
            </div>
            <div className="mt-12 h-40 dark:bg-white/10 bg-slate-300 rounded-2xl border dark:border-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-xs font-bold uppercase tracking-widest opacity-50 dark:text-white text-slate-900">
                Security Infrastructure Map
              </span>
            </div>
          </Card>

          <Card className="p-10 border-none bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl md:col-span-2 flex flex-col md:flex-row gap-10">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <PsychologyRoundedIcon className="text-primary" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  AI Analysis Models
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/5 transition-colors group">
                  <h4 className="font-bold text-primary">
                    Predicted Risk Zones
                  </h4>
                  <p className="text-sm text-slate-500">
                    XGBoost geospatial density analysis
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/5 transition-colors group">
                  <h4 className="font-bold text-primary">
                    Time-series Forecasting
                  </h4>
                  <p className="text-sm text-slate-500">
                    LSTM seasonal crime fluctuations
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/5 transition-colors group">
                  <h4 className="font-bold text-primary">
                    Crime Pattern Classification
                  </h4>
                  <p className="text-sm text-slate-500">
                    Random Forest based crime type categorization
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/5 transition-colors group">
                  <h4 className="font-bold text-primary">
                    Trend Stability Analysis
                  </h4>
                  <p className="text-sm text-slate-500">
                    Statistical validation of increasing or decreasing trends
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-20 pt-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Three-Tier Architecture
            </h2>
            <p className="text-slate-500 mt-2">
              Built on professional-grade enterprise standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Frontend",
                icon: <LayersRoundedIcon />,
                tech: "React.js • D3.js",
                desc: "User-centric dashboard providing role-based data visualization.",
              },
              {
                title: "Backend",
                icon: <TerminalRoundedIcon />,
                tech: "Python • Django",
                desc: "Complex API orchestration and asynchronous AI processing.",
              },
              {
                title: "Storage",
                icon: <StorageRoundedIcon />,
                tech: "MySQL • AES-256",
                desc: "High-integrity database with enterprise-grade encryption.",
              },
            ].map((layer, i) => (
              <div key={i} className="group relative text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-4xl bg-white dark:bg-slate-500 shadow-xl text-primary group-hover:-translate-y-2 transition-all duration-300">
                  {React.cloneElement(layer.icon, { sx: { fontSize: 40 } })}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-1">
                  {layer.title}
                </h4>
                <p className="text-primary-500 dark:text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
                  {layer.tech}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 px-6">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-1 md:p-1 pt-8 bg-linear-to-r from-primary/30 to-blue-500/30 rounded-[3.5rem]">
          <div className="p-12 md:p-20 rounded-[3.4rem] bg-white dark:bg-slate-950 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xs">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                Secure Data Processing
              </h3>
              <p className="text-slate-500 mt-4">
                A standard five-step pipeline ensuring data integrity.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              {["Ingest", "Analyze", "Score", "Map", "Trend"].map((step, i) => (
                <div
                  key={i}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center flex-col shadow-sm hover:shadow-primary-500/20 hover:border-primary-500/20 transition-all cursor-default"
                >
                  <span className="text-[10px] font-black text-primary-500 dark:text-white uppercase tracking-tighter">
                    0{i + 1}
                  </span>
                  <span className="text-[10px] font-bold text-slate-900 dark:text-white uppercase">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
