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
    label: "AI Heatmap Prediction",
    description:
      "Shows high-risk, medium-risk, and low-risk zones using ML-based analysis of historical crime patterns.",
    count: "Live",
    percent: "Active",
    icon: MapRoundedIcon,
  },
  {
    label: "Crime Trend Forecasting",
    description:
      "Predicts how crime will increase, decrease, or remain stable using time-series algorithms like LSTM and Linear Regression.",
    count: "95%",
    percent: "Accuracy",
    icon: BarChartRoundedIcon,
  },
  {
    label: "Secure Data Management",
    description:
      "Encrypted storage for crime records with strict MySQL schemas and role-based access policies.",
    count: "AES-256",
    percent: "Encrypted",
    icon: LockRoundedIcon,
  },
  {
    label: "Role-based Access",
    description:
      "Different dashboards for admins, officers, analysts, supervisors, and researchers — each with tailored tools.",
    count: "5 Roles",
    percent: "Access",
    icon: PeopleAltRoundedIcon,
  },
  {
    label: "Smart Notifications",
    description:
      "Alerts users when a division becomes high-risk or requires urgent attention.",
    count: "Instant",
    percent: "Alerts",
    icon: DescriptionRoundedIcon,
  },
];

const FeatureOverview = () => {
  return (
    <section className="py-12 max-lg:mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            Core Features of SafeLanka
          </h2>
          <p className="mt-3 text-slate-600 dark:text-muted-300 max-w-2xl mx-auto">
            AI-powered tools designed to support smarter, safer, and data-driven
            policing across Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((item, i) => (
            <div
              key={i}
              className="group p-6 text-center rounded-3xl shadow-xl transition-all duration-300 
             hover:bg-primary-700 dark:bg-muted-500 dark:hover:bg-muted-700 cursor-pointer
             flex flex-col h-full justify-between"
            >
              <div>
                <div
                  className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-primary-500 
                 dark:bg-muted-900 text-white transition-all duration-300 
                 group-hover:bg-white dark:group-hover:text-muted-900 group-hover:text-primary-500"
                >
                  <item.icon fontSize="large" />
                </div>

                <h3 className="mt-2 text-base text-muted-900 dark:text-white transition-all duration-300 group-hover:text-white">
                  {item.label}
                </h3>

                <p
                  className="text-sm text-muted-670 dark:text-muted-200 mt-2 leading-snug 
                 transition-all duration-300 group-hover:text-white"
                >
                  {item.description}
                </p>

                <p className="text-lg font-bold text-muted-900 mt-3 transition-all duration-300 group-hover:text-white">
                  {item.count}
                </p>
              </div>

              <div className="mt-4">
                <Badge
                  label={item.percent}
                  className="inline-block mt-2 text-xs font-medium text-white bg-primary-500 dark:bg-muted-900 
                 group-hover:bg-white group-hover:text-primary-500 dark:group-hover:text-muted-900 
                 rounded-xl transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;
