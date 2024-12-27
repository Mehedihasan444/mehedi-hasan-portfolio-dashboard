"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface EducationFormProps {
  onClose: () => void;
}

export function EducationForm({ onClose }: EducationFormProps) {
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [period, setPeriod] = useState("");
  const [details, setDetails] = useState("");

  const handleSave = () => {
    // Save education logic here
    onClose();
  };

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="degree">Degree</Label>
          <Input
            id="degree"
            placeholder="Enter degree name"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="institution">Institution</Label>
          <Input
            id="institution"
            placeholder="Enter institution name"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="period">Period</Label>
          <Input
            id="period"
            placeholder="e.g., 2016 - 2020"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="details">Additional Details</Label>
          <Textarea
            id="details"
            placeholder="Enter additional details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
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