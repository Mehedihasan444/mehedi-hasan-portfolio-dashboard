"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ExperienceFormProps {
  onClose: () => void;
}

export function ExperienceForm({ onClose }: ExperienceFormProps) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [period, setPeriod] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    // Save experience logic here
    onClose();
  };

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Job Title</Label>
          <Input
            id="title"
            placeholder="Enter job title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Enter company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="period">Period</Label>
          <Input
            id="period"
            placeholder="e.g., 2020 - Present"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter job description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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