import React from "react";
import { MobileSidebar } from "./MobileSidebar";
import NavbarRoutes from "../../../components/NavbarRoutes";

export const Navbar = () => {
  return (
    <div className="p-3 border-b h-full flex items-center bg-white shadow-sm z-50">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
