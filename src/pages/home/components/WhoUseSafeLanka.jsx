import React from "react";

import Card from "@/components/ui/Card";

import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import LocalPoliceRoundedIcon from "@mui/icons-material/LocalPoliceRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";

const ROLES = [
  {
    title: "Administrators",
    description:
      "Full system oversight: manage user credentials, define security permissions, and configure global system parameters.",
    icon: <AdminPanelSettingsRoundedIcon sx={{ fontSize: 32 }} />,
    accent: "text-blue-600",
    bg: "bg-blue-500/10",
  },
  {
    title: "Police Officers",
    description:
      "Operational field access: view real-time crime heatmaps and predictive risk zones to optimize patrol routes and response.",
    icon: <LocalPoliceRoundedIcon sx={{ fontSize: 32 }} />,
    accent: "text-emerald-600",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Data Analysts",
    description:
      "Strategic intelligence: evaluate long-term crime trends and pattern shifts to assist in legislative and tactical planning.",
    icon: <InsightsRoundedIcon sx={{ fontSize: 32 }} />,
    accent: "text-purple-600",
    bg: "bg-purple-500/10",
  },
];

const WhoUseSafeLanka = () => {
  return (
    <section className="relative py-20 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-black dark:text-white uppercase bg-primary/10 rounded-full">
            Target Users
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who Uses SafeLanka
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            SafeLanka is designed for professionals who make critical decisions
            to keep communities safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROLES.map((role) => (
            <Card
              key={role.title}
              className="group relative p-10 h-full border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 shadow-xl transition-all duration-500 rounded-[2.5rem] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col items-center text-center gap-6 relative z-10">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full ${role.bg} ${role.accent} transition-transform duration-500 group-hover:scale-110 group-hover:shadow-inner`}
                >
                  {role.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {role.title}
                  </h3>
                  <div className="w-12 h-1 bg-primary/20 mx-auto rounded-full" />
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {role.description}
                </p>

                <div className="mt-4 px-4 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Authorized Personnel Only
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoUseSafeLanka;
