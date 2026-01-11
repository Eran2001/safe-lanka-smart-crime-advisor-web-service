import React from "react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

import NeighborhoodSafety from "../../assets/images/img-1.jpg";
import CrimePattern from "../../assets/images/img-2.jpg";
import SystemWorkflow from "../../assets/images/img-3.jpg";

const BLOGS = [
  {
    title: "How to Stay Safe in Your Neighborhood",
    description:
      "Simple and practical tips to stay alert, aware, and safe in your daily surroundings.",
    img: NeighborhoodSafety,
    category: "Safety",
    readTime: "5 min",
  },
  {
    title: "Understanding Crime Patterns",
    description:
      "Learn what crime patterns are and how hotspot analysis helps communities stay alert.",
    img: CrimePattern,
    category: "AI Insights",
    readTime: "8 min",
  },
  {
    title: "How the Smart Crime Advisor Works",
    description:
      "An easy explanation of how SafeLanka generates predictions and alerts.",
    img: SystemWorkflow,
    category: "System",
    readTime: "10 min",
  },
  {
    title: "Steps to Report Suspicious Activities",
    description:
      "Know what details to collect and how timely reporting helps prevent crime.",
    img: NeighborhoodSafety,
    category: "Safety",
    readTime: "6 min",
  },
  {
    title: "Emergency Preparedness Guide",
    description:
      "Essential steps and planning tips to stay prepared during emergencies.",
    img: CrimePattern,
    category: "Safety",
    readTime: "7 min",
  },
  {
    title: "Home Safety Tips",
    description:
      "Simple home safety practices including locking, lighting, and valuables protection.",
    img: SystemWorkflow,
    category: "Safety",
    readTime: "5 min",
  },
  {
    title: "Digital Safety & Online Scams",
    description:
      "Understand common online scams and how to protect your personal information.",
    img: NeighborhoodSafety,
    category: "Cyber Safety",
    readTime: "9 min",
  },
  {
    title: "Women’s Safety Tips",
    description:
      "Practical safety precautions and self-protection basics for women.",
    img: CrimePattern,
    category: "Safety",
    readTime: "6 min",
  },
  {
    title: "Child Safety Awareness",
    description:
      "Teaching children about safe situations and steps to follow when lost.",
    img: SystemWorkflow,
    category: "Safety",
    readTime: "6 min",
  },
  {
    title: "How to Create a Strong Password",
    description:
      "Learn password best practices and how strong passwords protect your data.",
    img: NeighborhoodSafety,
    category: "Cyber Safety",
    readTime: "4 min",
  },
  {
    title: "Importance of Community Policing",
    description:
      "How cooperation between citizens and police improves community safety.",
    img: CrimePattern,
    category: "Community",
    readTime: "7 min",
  },
  {
    title: "Safe Travel Tips",
    description:
      "Practical advice for staying safe while traveling and using public transport.",
    img: SystemWorkflow,
    category: "Safety",
    readTime: "5 min",
  },
];

const BlogPage = () => {
  return (
    <section className="relative w-full pt-8 pb-20 px-6 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge
            label="Resource Center"
            className="mb-4 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-500 bg-primary-500/10 border-none rounded-full"
          />
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            Safety & Awareness Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Practical articles to help communities stay informed and safe
            through data-driven knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOGS.map((blog, i) => (
            <Card
              key={i}
              className="group relative flex flex-col h-full bg-white dark:bg-slate-900 dark:border dark:border-muted-500 shadow-lg rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={blog.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={blog.title}
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl text-slate-900 shadow-lg">
                    <BookmarkBorderRoundedIcon sx={{ fontSize: 20 }} />
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col grow space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-500 bg-primary-500/5 px-3 py-1 rounded-lg">
                    {blog.category || "Safety"}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <AccessTimeRoundedIcon sx={{ fontSize: 14 }} />{" "}
                    {blog.readTime || "5 min"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed grow">
                  {blog.description}
                </p>

                <div className="pt-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">
                  Continue Reading{" "}
                  <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
