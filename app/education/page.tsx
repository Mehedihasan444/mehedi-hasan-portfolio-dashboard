"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { EducationForm } from "@/components/education-form";

export default function EducationPage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <Button variant="default" onClick={() => setIsEditing(true)} className="text-white">
          <Plus className="mr-2 h-4 w-4" /> Add Education
        </Button>
      </div>

      {isEditing ? (
        <EducationForm onClose={() => setIsEditing(false)} />
      ) : (
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Computer Science</h3>
                  <p className="text-sm text-muted-foreground">University of Technology</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">2016 - 2020</p>
              <p className="mt-2">Bachelor&apos;s Degree • GPA: 3.8</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}