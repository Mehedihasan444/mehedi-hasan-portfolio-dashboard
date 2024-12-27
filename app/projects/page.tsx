"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { ProjectForm } from "@/components/project-form";

export default function ProjectsPage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <Button onClick={() => setIsEditing(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>

      {isEditing ? (
        <ProjectForm onClose={() => setIsEditing(false)} />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Portfolio Dashboard</h3>
              <p className="text-sm text-muted-foreground mt-2">
                A professional dashboard built with Next.js and Tailwind CSS...
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-muted-foreground">React, Next.js, TypeScript</span>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}