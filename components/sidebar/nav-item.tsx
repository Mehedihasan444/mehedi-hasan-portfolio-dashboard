"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
  isCollapsed: boolean;
}

export function NavItem({ icon: Icon, label, href, isActive, isCollapsed }: NavItemProps) {
  return (
    <Link href={href} className="block">
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className={cn(
          "w-full justify-start h-10",
          isActive && "bg-primary/10 hover:bg-primary/15",
          isCollapsed ? "px-2" : "px-4"
        )}
      >
        <Icon className={cn(
          "h-4 w-4",
          isActive ? "text-primary" : "text-muted-foreground",
          !isCollapsed && "mr-2"
        )} />
        {!isCollapsed && (
          <span className={cn(
            isActive ? "text-primary" : "text-muted-foreground"
          )}>
            {label}
          </span>
        )}
      </Button>
    </Link>
  );
}