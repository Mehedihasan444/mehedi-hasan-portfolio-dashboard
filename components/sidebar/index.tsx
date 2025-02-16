"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Briefcase, GraduationCap, Code2, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { CollapseButton } from "./collapse-button";
import { NavItem } from "./nav-item";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "Blogs",
    icon: FileText,
    href: "/blogs",
  },
  {
    label: "Projects",
    icon: Code2,
    href: "/projects",
  },
  {
    label: "Experience",
    icon: Briefcase,
    href: "/experience",
  },
  {
    label: "Education",
    icon: GraduationCap,
    href: "/education",
  },
  {
    label: "Skill",
    icon: Cpu,
    href: "/skills",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "relative flex flex-col h-full border-r bg-card",
      isCollapsed ? "w-16" : "w-64",
      "transition-width duration-200"
    )}>
      <div className="p-3 space-y-4">
        <div className={cn(
          "flex items-center justify-center h-12",
          !isCollapsed && "justify-start px-4"
        )}>
          <h2 className="font-semibold text-primary">
            {isCollapsed ? "PD" : "Portfolio Dashboard"}
          </h2>
        </div>
        <div className="space-y-1">
          {routes.map((route) => (
            <NavItem
              key={route.href}
              {...route}
              isActive={pathname === route.href}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      </div>
      <div className="mt-auto border-t p-3">
        <CollapseButton
          isCollapsed={isCollapsed}
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>
    </div>
  );
}