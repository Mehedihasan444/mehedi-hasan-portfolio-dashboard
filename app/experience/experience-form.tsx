"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { baseURL } from "@/config";
import { toast } from "sonner";


interface ExperienceFormProps {
  onClose: () => void;
}
interface TCompany {
  name: string,
  location: string;
  country: string
}

export function ExperienceForm({ onClose }: ExperienceFormProps) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState<TCompany>({
    name: "",
    location: "",
    country: ""
  });
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    const experienceInfo = {
      post: title,
      company,
      startingDate: startDate,
      endingDate: endDate,
      workingDescription: description
    }
    const jsonExperienceInfo = JSON.stringify(experienceInfo)
    // Send data to the backend
    fetch(`${baseURL}/experience`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonExperienceInfo, // Use the JSON string
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        if (data.success) {
          toast.success('Education created successfully');
          // onClose();
        } else {
          toast.error('Failed to create education');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Something went wrong');
      });
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
          <div className="sm:flex justify-between gap-4">
            <div className="flex-1">  <Input
              id="company-name"
              placeholder="Enter company name"
              value={company?.name || ""}
              onChange={(e) => setCompany({ ...company, name: e.target.value })}
            /></div>
            <div className="flex-1">   <Input
              id="company-location"
              placeholder="Enter company location"
              value={company?.location || ""}
              onChange={(e) => setCompany({ ...company, location: e.target.value })}
            /></div>
            <div className="flex-1">    <Input
              id="company-country"
              placeholder="Enter company country"
              value={company?.country || ""}
              onChange={(e) => setCompany({ ...company, country: e.target.value })}
            /></div>



          </div>
        </div>
        <div className="sm:flex justify-between space-x-4">

          <div className="space-y-2 flex-1">
            <Label htmlFor="start-date">Start Date</Label>
            <Input
              id="startingDate"
              type="date"
              value={startDate.split('T')[0]}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="space-y-2 flex-1">
            <Label htmlFor="end-date">End Date</Label>
            <Input
              id="endingDate"
              type="date"
              value={endDate.split('T')[0]}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="workingDescription"
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