import React from "react";

const SideBarWrapper = ({ children }) => {
  return (
    <div className="w-full h-full p-4 flex flex-col lg:flex-row">
      <main className="h-[calc(100%-80px)] lg:h-full w-full flex gap-4">{children}</main>
    </div>
  );
};

export default SideBarWrapper;
