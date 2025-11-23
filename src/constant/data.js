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
