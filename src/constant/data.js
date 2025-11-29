// Main navigation links
export const mainNavHome = {
  name: "Home",
  link: "/",
  allowed: ["SUPER-ADMIN", "ADMIN", "POLICE-OFFICER", "ANALYST", "RESEARCHER"],
};

export const mainNavAbout = {
  name: "About",
  link: "/about",
  allowed: ["SUPER-ADMIN", "ADMIN", "POLICE-OFFICER", "ANALYST", "RESEARCHER"],
};

export const mainNavBlog = {
  name: "Blog",
  link: "/blog",
  allowed: ["SUPER-ADMIN", "ADMIN", "POLICE-OFFICER", "ANALYST", "RESEARCHER"],
};

export const mainNavGuide = {
  name: "Guide",
  link: "/guide",
  allowed: ["SUPER-ADMIN", "ADMIN", "POLICE-OFFICER", "ANALYST", "RESEARCHER"],
};

export const mainNavItems = [
  mainNavHome,
  mainNavAbout,
  mainNavBlog,
  mainNavGuide,
];

// Sidebar navigation links - protected
export const menuItemManageDashboard = {
  group: "",
  title: "Dashboard",
  icon: "heroicons-outline:home",
  link: "dashboard",
  allowed: ["SUPER-ADMIN", "ADMIN", "POLICE-OFFICER", "ANALYST", "RESEARCHER"],
  sub: [
    {
      title: "Import Data",
      link: "dashboard/import",
    },
  ],
};

export const menuItems = [menuItemManageDashboard];

export const settingMenuItems = [
  {
    isHeader: true,
    title: "Settings",
  },
  {
    title: "User Management",
    icon: "heroicons-outline:users",
    link: "/setting/users",
  },
];
