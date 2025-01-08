"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { EducationForm } from "@/app/education/education-form";
import { fetchEducationData } from "./data";
import { TEducation } from "@/interface";
import { baseURL } from "@/config";

export default function EducationPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [educations, setEducations] = useState<TEducation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const getEducationData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchEducationData();

        setEducations(response.data); // Access the data array from response
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Education data');
      } finally {
        setIsLoading(false);
      }
    };

    getEducationData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${baseURL}/education/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setEducations(educations.filter(education => education._id !== id));
      }
    } catch (error) {
      console.error('Error deleting education:', error);
      setError('Failed to delete education');
    }
  }


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
      ) : (isLoading ? <div>Loading...</div> : error ? <div>Error: {error}</div> :
        <div className="space-y-4">
          {
            educations?.map((education: TEducation, index: number) => <Card key={index}>
              <CardContent className="p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{education.degree}</h3>
                    <p className="text-sm text-muted-foreground">{education.institution.name}</p>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{education.startDate.split("T")[0]} - {education.endDate >= Date() ? "Present" : education.endDate.split("T")[0]}</p>
                <p className="mt-2">Bachelor&apos;s Degree • GPA: 3.8</p>
              </CardContent>
              <div className="flex justify-end px-4 gap-4 pb-4">
                <Button variant="destructive" size="sm" onClick={() => education._id && handleDelete(education._id)}>
                  Delete
                </Button>
                <Button variant="default" className="text-white" size="sm" onClick={() => setIsEditing(true)}>Edit</Button>
              </div>
            </Card>)

          }
        </div>
      )}
    </div>
  );
}