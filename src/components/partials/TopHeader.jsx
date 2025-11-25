import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const TopHeader = () => {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full w-[350px]">
        <SearchIcon className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      <div className="flex items-center gap-3">
        <img
          src="/profile.jpg"
          className="w-10 h-10 rounded-full border"
          alt="profile"
        />
        <div>
          <p className="font-semibold text-sm">John Doe</p>
          <p className="text-xs text-gray-500">@johndoe</p>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
