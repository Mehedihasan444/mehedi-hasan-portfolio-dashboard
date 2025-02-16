"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import IconPicker from "@/components/iconPicker";
import { toast } from "sonner";
import { baseURL } from "@/config";

interface SkillFormProps {
  onClose: () => void;
}

const PROFICIENCY_LEVELS = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "expert", label: "Expert" },
];

const CATEGORIES = [
  { value: "frontend", label: "Frontend Development" },
  { value: "backend", label: "Backend Development" },
  { value: "mobile", label: "Mobile Development" },
  { value: "devops", label: "DevOps" },
  { value: "database", label: "Database" },
  { value: "cloud", label: "Cloud Computing" },
  { value: "ai", label: "AI/Machine Learning" },
  { value: "security", label: "Security" },
];

export function SkillForm({ onClose }: SkillFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    icon: "",
    category: "",
    proficiency: "",
    description: "",
    yearsOfExperience: "",
  });

  const handleSave = () => {
    // Save skill logic here
    const skillInfo = {
      ...formData
    };

    // Convert eduInfo to JSON string
    const jsonSkillInfo = JSON.stringify(skillInfo);

    // Send data to the backend
    fetch(`${baseURL}/skills`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonSkillInfo, // Use the JSON string
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        if (data.success) {
          toast.success('Skill added successfully');
          onClose();
        } else {
          toast.error('Failed to create education');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Something went wrong');
      });
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Skill Name</Label>
          <Input
            id="name"
            placeholder="e.g., React, Python, AWS"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Icon</Label>
          <IconPicker
            selectedIcon={formData.icon}
            onSelect={(iconName) => updateField("icon", iconName)}
          />
        </div>
        <div className="space-y-2">
          <Label>Category</Label>
          <Select
            value={formData.category}
            onValueChange={(value) => updateField("category", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Proficiency Level</Label>
          <Select
            value={formData.proficiency}
            onValueChange={(value) => updateField("proficiency", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select proficiency level" />
            </SelectTrigger>
            <SelectContent>
              {PROFICIENCY_LEVELS.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="yearsOfExperience">Years of Experience</Label>
          <Input
            id="yearsOfExperience"
            type="number"
            placeholder="e.g., 5"
            value={formData.yearsOfExperience}
            onChange={(e) => updateField("yearsOfExperience", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Brief description of your experience with this skill"
            value={formData.description}
            onChange={(e) => updateField("description", e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Skill
          </Button>
        </div>
      </div>
    </Card>
  );
}