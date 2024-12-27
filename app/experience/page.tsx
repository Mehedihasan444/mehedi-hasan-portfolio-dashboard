"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { ExperienceForm } from "@/components/experience-form";

export default function ExperiencePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <Button onClick={() => setIsEditing(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Experience
        </Button>
      </div>

      {isEditing ? (
        <ExperienceForm onClose={() => setIsEditing(false)} />
      ) : (
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Senior Developer</h3>
                  <p className="text-sm text-muted-foreground">Tech Company Inc.</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">2020 - Present</p>
              <p className="mt-2">Led development of multiple full-stack applications...</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}