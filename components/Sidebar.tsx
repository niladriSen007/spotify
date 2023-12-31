"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search", //means until the page reaches '/search' active will always be true
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search", //means until the page reaches '/search' active will always be false
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full bg-slate-900 ">
      <div
        className=" hidden 
          md:flex 
          flex-col 
          gap-y-2 
          bg-slate-900 
          h-full 
          w-[300px] 
          p-2"
      >
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <div className="h-full flex-1 overflow-y-auto py-2  bg-[#101B30]">{children}</div>
    </div>
  );
};

export default Sidebar;
