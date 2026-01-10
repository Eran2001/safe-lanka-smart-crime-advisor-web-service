import React from "react";
import Button from "@/components/ui/Button";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white dark:bg-slate-950 overflow-hidden">
      <div className="absolute top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
              SafeLanka
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              SafeLanka – Smart Crime Advisor is an AI-powered system designed
              to support safer communities through data-driven crime prediction
              and awareness.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Home
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Services
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Predictions
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Help
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Resources
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Safety Guides
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Blogs
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                User Guide
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">@</span>{" "}
                support@safelanka.lk
              </li>
              <li className="opacity-80">Platform: Web-based system</li>
              <li className="opacity-80">Access: Admin approved</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} SafeLanka – Smart Crime Advisor</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Built for smarter, safer communities in Sri Lanka
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
