"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FileText, Briefcase, GraduationCap, Code2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-secondary/10">
      <div className="px-3 py-2 mt-5">
        <h2 className="mb-2 px-4 text-center text-xl font-semibold">
          Dashboard
        </h2>
        <div className="p-4 ">
          {routes.map((route) => (
            <div className="mb-2" key={route.href}>

              <Link

                href={route.href}

              >
                <Button
                  variant={pathname === route.href ? "secondary" : "ghost"}
                  className={cn("w-full justify-start",
                    pathname === route.href && "bg-secondary"
                  )}
                >
                  <route.icon className="mr-2 h-4 w-4" />
                  {route.label}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}