import React from "react";
import Card from "@/components/ui/Card";

import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";

const STEPS = [
  {
    step: "01",
    title: "Data Collection",
    description:
      "The system securely processes historical crime data from multiple trusted sources.",
    icon: <StorageRoundedIcon sx={{ fontSize: 28 }} />,
    color: "bg-blue-500",
  },
  {
    step: "02",
    title: "Model Learning",
    description:
      "Machine learning models analyze patterns, trends, and correlations over time.",
    icon: <PsychologyRoundedIcon sx={{ fontSize: 28 }} />,
    color: "bg-purple-500",
  },
  {
    step: "03",
    title: "Hotspot Prediction",
    description:
      "AI predicts high-risk crime zones based on learned behavioral patterns.",
    icon: <LocationOnRoundedIcon sx={{ fontSize: 28 }} />,
    color: "bg-amber-500",
  },
  {
    step: "04",
    title: "Visual Insights",
    description:
      "Results are displayed as interactive heatmaps for quick decision-making.",
    icon: <MapRoundedIcon sx={{ fontSize: 28 }} />,
    color: "bg-emerald-500",
  },
];

const HowPredictionsWork = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-950/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-black dark:text-white uppercase rounded-full">
            The Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Predictions Work
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A transparent, four-stage intelligence pipeline designed to keep
            communities safer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, index) => (
            <div key={item.step} className="relative">
              {index !== STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-linear-to-r from-primary/50 to-transparent z-0 -translate-x-10" />
              )}

              <Card className="group relative z-10 h-full p-8 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 rounded-4xl shadow-sm hover:shadow-2xl hover:-translate-y-2">
                <div className="flex flex-col gap-5">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl text-white shadow-lg ${item.color} transform group-hover:rotate-6 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="dark:text-primary-500 font-mono font-bold text-sm tracking-tighter">
                        STEP {item.step}
                      </span>
                      <div className="h-px w-8 bg-slate-200 dark:bg-slate-700" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowPredictionsWork;
