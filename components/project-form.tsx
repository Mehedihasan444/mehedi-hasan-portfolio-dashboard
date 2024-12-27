"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ProjectFormProps {
  onClose: () => void;
}

export function ProjectForm({ onClose }: ProjectFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");

  const handleSave = () => {
    // Save project logic here
    onClose();
  };

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Project Title</Label>
          <Input
            id="title"
            placeholder="Enter project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="technologies">Technologies</Label>
          <Input
            id="technologies"
            placeholder="e.g., React, TypeScript, Node.js"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </Card>
  );
}