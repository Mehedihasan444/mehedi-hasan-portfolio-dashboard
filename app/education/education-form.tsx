"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { baseURL } from "@/config";
import { toast } from "sonner";

interface EducationFormProps {
  onClose: () => void;
}
interface Institution {

  name: string,
  location: string,
  country: string,

}

export function EducationForm({ onClose }: EducationFormProps) {
  const [degree, setDegree] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [institution, setInstitution] = useState<Institution>({
    name: "",
    location: "",
    country: ""
  });
  const [description, setDescription] = useState<string>("");

  const handleSave = () => {
    // Save education logic here
    const eduInfo = {
      degree,
      institution,
      startDate,
      endDate,
      description
    };
  
    // Convert eduInfo to JSON string
    const jsonEduInfo = JSON.stringify(eduInfo);
  
    // Send data to the backend
    fetch(`${baseURL}/education`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonEduInfo, // Use the JSON string
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        if (data.success) {
          toast.success('Education created successfully');
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
  
  return (
    // <Card className="p-4">
    //   <div className="space-y-4">
    //     <div className="space-y-2">
    //       <Label htmlFor="degree">Degree</Label>
    //       <Input
    //         id="degree"
    //         placeholder="Enter degree name"
    //         value={degree}
    //         onChange={(e) => setDegree(e.target.value)}
    //       />
    //     </div>
    //     <div className="space-y-2">
    //       <Label htmlFor="institution">Institution</Label>
    //       <div className="">

    //       <Input
    //         id="name"
    //         placeholder="Enter institution name"
    //         value={institution}
    //         onChange={(e) => setInstitution(e.target.value)}
    //       />
    //       <Input
    //         id="location"
    //         placeholder="Enter institution name"
    //         value={institution}
    //         onChange={(e) => setInstitution(e.target.value)}
    //       />
    //       <Input
    //         id="country"
    //         placeholder="Enter institution name"
    //         value={institution}
    //         onChange={(e) => setInstitution(e.target.value)}
    //       />
    //       </div>
    //     </div>
    //     <div className="space-y-2">
    //       <Label htmlFor="period">Period</Label>
    //       <Input
    //         id="period"
    //         placeholder="e.g., 2016 - 2020"
    //         value={period}
    //         onChange={(e) => setPeriod(e.target.value)}
    //       />
    //     </div>
    //     <div className="space-y-2">
    //       <Label htmlFor="details">Additional Details</Label>
    //       <Textarea
    //         id="details"
    //         placeholder="Enter additional details"
    //         value={details}
    //         onChange={(e) => setDetails(e.target.value)}
    //       />
    //     </div>
    //     <div className="flex justify-end space-x-2">
    //       <Button variant="outline" onClick={onClose}>
    //         Cancel
    //       </Button>
    //       <Button onClick={handleSave}>
    //         Save
    //       </Button>
    //     </div>
    //   </div>
    // </Card>
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
          <Label htmlFor="institution-name">Institution Name</Label>
          <div className="sm:flex justify-between space-x-4">

            <div className="space-y-2 flex-1">
              <Input
                id="name"
                placeholder="Enter institution name"

                value={institution?.name || ""}
                onChange={(e) => setInstitution({ ...institution, name: e.target.value })}
              />
            </div>
            <div className="space-y-2 flex-1">
              {/* <Label htmlFor="institution-location">Institution Location</Label> */}
              <Input
                id="location"
                placeholder="Enter institution location"
                value={institution.location}
                onChange={(e) => setInstitution({ ...institution, location: e.target.value })}
              />
            </div>
            <div className="space-y-2 flex-1">
              {/* <Label htmlFor="institution-country">Institution Country</Label> */}
              <Input
                id="country"
                placeholder="Enter institution country"
                value={institution.country}
                onChange={(e) => setInstitution({ ...institution, country: e.target.value })}
              />
            </div>
          </div></div>
        <div className="sm:flex justify-between space-x-4">

          <div className="space-y-2 flex-1">
            <Label htmlFor="start-date">Start Date</Label>
            <Input
              id="start-date"
              type="date"
              value={startDate.split('T')[0]}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="space-y-2 flex-1">
            <Label htmlFor="end-date">End Date</Label>
            <Input
              id="end-date"
              type="date"
              value={endDate.split('T')[0]}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Additional Details</Label>
          <Textarea
            id="description"
            placeholder="Enter additional details"
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