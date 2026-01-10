import React from "react";

import Button from "@/components/ui/Button";

import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const CallToAction = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />

      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-8 md:p-16 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-md text-center shadow-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary-500 dark:text-slate-700 mb-8 border border-primary/20">
            <SecurityRoundedIcon sx={{ fontSize: 32 }} />
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-primary-500 dark:text-white tracking-tight mb-6">
            Get Started with SafeLanka
          </h2>

          <p className="text-lg md:text-xl text-slate-900 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Empower your division with AI-powered crime predictions and
            interactive heatmaps. Join the network dedicated to a safer Sri
            Lanka.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* <Button
              size="lg"
              className="group h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg transition-all duration-300 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <PersonAddAltRoundedIcon />
              Register Now
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 rounded-2xl border-white/20 text-white hover:bg-white/10 font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <LoginRoundedIcon />
              Personnel Login
            </Button> */}
            <button className="w-full sm:w-auto px-8 py-4 bg-primary-500 dark:bg-slate-500 dark:hover:bg-slate-700 hover:bg-primary-700 text-white rounded-xl font-bold shadow-xl shadow-primary-700/20 dark:shadow-slate-700/20 hover:shadow-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer">
              Register Now
              <ChevronRightRoundedIcon className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 dark:text-slate-500 border-2 border-primary-200 dark:border-slate-500 hover:border-primary-200 dark:hover:border-slate-700 hover:bg-primary-100 hover:dark:bg-muted-100 text-muted-700 hover:text-primary-700 dark:hover:text-muted-900 rounded-xl font-bold transition-all cursor-pointer">
              Learn More
            </button>
          </div>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Secure • Encrypted • Official Use Only
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
