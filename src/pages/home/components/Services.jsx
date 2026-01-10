import React from "react";

import Card from "@/components/ui/Card";

import MapRoundedIcon from "@mui/icons-material/MapRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

const SERVICES = [
  {
    title: "Crime Prediction & Mapping",
    description:
      "Advanced AI models highlight high-risk areas to support localized, safer decision-making.",
    icon: <MapRoundedIcon sx={{ fontSize: 28 }} />,
  },
  {
    title: "Guided Crime Reporting",
    description:
      "Intuitive assistance help users submit structured and accurate data about suspicious activities.",
    icon: <EditNoteRoundedIcon sx={{ fontSize: 28 }} />,
  },
  {
    title: "Safety Tips & Awareness",
    description:
      "Expertly curated blogs and checklists to keep you safe at home, outdoors, and online.",
    icon: <ShieldRoundedIcon sx={{ fontSize: 28 }} />,
  },
  {
    title: "Live Alerts & Dashboard",
    description:
      "Stay informed with real-time notifications about risks in your immediate surroundings.",
    icon: <DashboardCustomizeRoundedIcon sx={{ fontSize: 28 }} />,
  },
  {
    title: "Community Intelligence",
    description:
      "Contribute to public safety by sharing feedback and rating the system's local accuracy.",
    icon: <StarRoundedIcon sx={{ fontSize: 28 }} />,
  },
  {
    title: "Support Center",
    description:
      "Comprehensive guides and 24/7 help section to ensure you get the most out of SafeLanka.",
    icon: <HelpOutlineRoundedIcon sx={{ fontSize: 28 }} />,
  },
];

const Services = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-black dark:text-white uppercase bg-primary/10 rounded-full">
            Our Ecosystem
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            SafeLanka provides intelligent tools and insights to support safer
            communities and smarter crime prevention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Card
              key={index}
              className="group p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-500 rounded-[2.5rem] hover:shadow-xl flex flex-col items-start text-left"
            >
              <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-6">
                {service.description}
              </p>

              <div className="cursor-pointer mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-500 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
