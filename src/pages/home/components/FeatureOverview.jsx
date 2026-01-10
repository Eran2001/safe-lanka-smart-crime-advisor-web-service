import React from "react";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import Badge from "@/components/ui/Badge";

const features = [
  {
    label: "AI Heatmap Prediction",
    description:
      "High, medium, and low-risk zones using ML-based historical patterns.",
    count: "Live",
    percent: "Active",
    icon: <MapRoundedIcon />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    label: "Crime Trend Forecasting",
    description:
      "Predicts stability or growth using LSTM and Linear Regression.",
    count: "95%",
    percent: "Accuracy",
    icon: <BarChartRoundedIcon />,
    color: "from-purple-500 to-indigo-400",
  },
  {
    label: "Secure Data Management",
    description:
      "Encrypted storage with strict MySQL schemas and access policies.",
    count: "AES-256",
    percent: "Encrypted",
    icon: <LockRoundedIcon />,
    color: "from-slate-700 to-slate-900",
  },
  {
    label: "Role-based Access",
    description: "Tailored dashboards for admins, officers, and researchers.",
    count: "5 Roles",
    percent: "Access",
    icon: <PeopleAltRoundedIcon />,
    color: "from-amber-500 to-orange-400",
  },
  {
    label: "Smart Notifications",
    description:
      "Instant alerts when a division requires urgent AI-driven attention.",
    count: "Instant",
    percent: "Alerts",
    icon: <DescriptionRoundedIcon />,
    color: "from-emerald-500 to-teal-400",
  },
];

const FeatureOverview = () => {
  return (
    <section className="relative py-20 bg-slate-50 dark:bg-slate-950/50 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-black dark:text-white uppercase bg-primary/10 rounded-full">
            Platform Capabilities
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Features of SafeLanka
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            AI-powered tools designed to support smarter, safer, and data-driven
            policing across Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full items-center text-center overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-4xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:scale-110 transition-transform duration-500 mb-6">
                  {React.cloneElement(item.icon, { sx: { fontSize: 32 } })}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.label}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 grow">
                  {item.description}
                </p>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 w-full">
                  <div className="text-2xl font-black text-slate-900 dark:text-white mb-1">
                    {item.count}
                  </div>
                  <Badge
                    label={item.percent}
                    className="inline-block text-[10px] px-3 py-1 font-bold uppercase tracking-wider text-primary-500 bg-primary-500/10 dark:text-white dark:bg-primary-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;
