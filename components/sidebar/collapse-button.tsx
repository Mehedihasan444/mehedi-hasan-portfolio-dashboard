"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CollapseButtonProps {
  isCollapsed: boolean;
  onClick: () => void;
}

export function CollapseButton({ isCollapsed, onClick }: CollapseButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-full flex justify-center p-0 h-6"
      onClick={onClick}
    >
      {isCollapsed ? (
        <ChevronRight className="h-4 w-4" />
      ) : (
        <ChevronLeft className="h-4 w-4" />
      )}
    </Button>
  );
}