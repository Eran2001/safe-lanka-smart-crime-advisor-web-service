import React from "react";

import MapRoundedIcon from "@mui/icons-material/MapRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

import Icons from "@/components/ui/Icons";
import Badge from "@/components/ui/Badge";

const features = [
  {
    label: "Crime Heatmaps",
    count: "Live",
    bg: "bg-cyan-500",
    text: "text-cyan-500",
    percent: "Active",
    icon: MapRoundedIcon,
  },
  {
    label: "Trend Prediction",
    count: "95%",
    bg: "bg-orange-500",
    text: "text-orange-500",
    percent: "Accuracy",
    icon: BarChartRoundedIcon,
  },
  {
    label: "System Reports",
    count: "Daily",
    bg: "bg-blue-600",
    text: "text-blue-600",
    percent: "Auto-Gen",
    icon: DescriptionRoundedIcon,
  },
  {
    label: "Data Security",
    count: "AES-256",
    bg: "bg-emerald-500",
    text: "text-emerald-500",
    percent: "Encrypted",
    icon: LockRoundedIcon,
  },
  {
    label: "Officer Directory",
    count: "240+",
    percent: "Active Units",
    icon: PeopleAltRoundedIcon,
  },
];

const GroupChart = () => {
  return (
    <section className="py-12 max-lg:mt-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((item, i) => (
            <div
              key={i}
              className="group p-6 text-center rounded-3xl shadow-xl transition-all duration-300 
                       hover:bg-primary-700 dark:bg-slate-900 cursor-pointer"
            >
              <div
                className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-primary-500 text-white 
                           transition-all duration-300 group-hover:bg-white group-hover:text-primary-500"
              >
                <item.icon fontSize="large" />
              </div>

              <h3 className="mt-2 text-base text-muted-500 dark:text-white transition-all duration-300 group-hover:text-white">
                {item.label}
              </h3>

              <p className="text-xl font-bold text-black dark:text-muted-500 mt-1 transition-all duration-300 group-hover:text-white">
                {item.count}
              </p>

              <Badge
                label={item.percent}
                className="inline-block mt-2 text-xs font-medium text-white bg-primary-500 group-hover:bg-white group-hover:text-primary-500 rounded-xl transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupChart;
