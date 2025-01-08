"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { ExperienceForm } from "@/app/experience/experience-form";
import { TExperience } from "@/interface";
import { fetchExperienceData } from "./data";
import { baseURL } from "@/config";

export default function ExperiencePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [experiences, setExperiences] = useState<TExperience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getExperiencesData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchExperienceData();

        setExperiences(response.data); // Access the data array from response
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Education data');
      } finally {
        setIsLoading(false);
      }
    };

    getExperiencesData();
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
        setExperiences(experiences.filter(experience => experience._id !== id));
      }
    } catch (error) {
      console.error('Error deleting experience:', error);
      setError('Failed to delete experience');
    }
  }

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
      ) : (isLoading ? <div>Loading...</div> : error ? <div>Error: {error}</div> :
        <div className="space-y-4">
          {
            experiences.map((experience: TExperience, index: number) =>
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{experience.post}</h3>
                      <p className="text-sm text-muted-foreground">{experience.company.name}</p>
                    </div>
                    <div className="flex gap-4">

                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(experience._id)}>Delete</Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{experience.startingDate.split("T")[0]} -{experience.endingDate >= Date() ? "Present" : experience.endingDate.split("T")[0]} </p>
                  <p className="mt-2">{experience.workingDescription}</p>
                </CardContent>

              </Card>
            )
          }
        </div>
      )}
    </div>
  );
}


{/* <Card>
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
          </Card> */}