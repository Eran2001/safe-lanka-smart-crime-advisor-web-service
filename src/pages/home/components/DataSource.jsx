import React from "react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";

const DataSource = () => {
  return (
    <section className="relative py-20 px-6 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-black dark:text-white uppercase bg-primary/10 rounded-full">
            Integrity & Transparency
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Data Sources
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            SafeLanka predictions are powered by reliable and verified data
            sources, ensuring the highest standards of accuracy.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="group relative w-full max-w-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="absolute -top-6 -right-6 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity">
              <StorageRoundedIcon sx={{ fontSize: 160 }} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative shrink-0">
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-slate-500 dark:text-white shadow-lg shadow-primary/30 transition-transform group-hover:-rotate-3">
                  <MenuBookRoundedIcon sx={{ fontSize: 40 }} />
                </div>

                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-full border-4 border-white dark:border-slate-900">
                  <VerifiedUserRoundedIcon sx={{ fontSize: 16 }} />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Sri Lanka Police Annual Crime Reports
                  </h3>

                  <Badge
                    label="Official"
                    className="bg-emerald-500/10 text-emerald-600 border-none px-3 py-1 text-[10px] uppercase font-bold tracking-widest"
                  />
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  The system utilizes official national crime statistics to
                  ensure accurate, transparent, and responsible AI predictions.
                  This data is processed through a secure pipeline to provide
                  localized safety insights.
                </p>

                <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Verified Authenticity
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Encrypted Processing
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataSource;
