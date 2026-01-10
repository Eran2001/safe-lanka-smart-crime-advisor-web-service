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
    icon: <MapRoundedIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: "Guided Crime Reporting",
    description:
      "Intuitive assistance help users submit structured and accurate data about suspicious activities.",
    icon: <EditNoteRoundedIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: "Safety Tips & Awareness",
    description:
      "Expertly curated blogs and checklists to keep you safe at home, outdoors, and online.",
    icon: <ShieldRoundedIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: "Live Alerts & Dashboard",
    description:
      "Stay informed with real-time notifications about risks in your immediate surroundings.",
    icon: <DashboardCustomizeRoundedIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: "Community Intelligence",
    description:
      "Contribute to public safety by sharing feedback and rating the system's local accuracy.",
    icon: <StarRoundedIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: "Support Center",
    description:
      "Comprehensive guides and 24/7 help section to ensure you get the most out of SafeLanka.",
    icon: <HelpOutlineRoundedIcon sx={{ fontSize: 32 }} />,
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
              className="group relative flex flex-col items-center text-center p-10 bg-white dark:bg-slate-900 border-none shadow-lg transition-all duration-400 hover:bg-primary-500 rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary-500 group-hover:h-0 transition-all duration-400" />

              <div className="flex justify-center items-center">
                <div className="mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-primary-500 text-white transition-all duration-400 group-hover:bg-white group-hover:text-primary-500">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-400 group-hover:text-white">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-6 transition-colors duration-400 group-hover:text-white/90">
                {service.description}
              </p>

              <div className="mt-auto flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-500 group-hover:text-white transition-colors duration-400">
                Learn More
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
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
