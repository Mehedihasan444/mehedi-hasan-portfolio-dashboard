"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { ProjectForm } from "@/app/projects/project-form";
import { fetchProjectData } from "./data";
import Image from "next/image";
import { TProject } from "@/interface";
import { baseURL } from "@/config";

export default function ProjectsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [projects, setProjects] = useState<TProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const getProjectData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchProjectData();
        setProjects(response.data); // Access the data array from response
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch project data');
      } finally {
        setIsLoading(false);
      }
    };

    getProjectData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${baseURL}/projects/${id}`, {
        method: 'DELETE',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setProjects(projects.filter(project => project._id !== id));
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      setError('Failed to delete project');
    }
  }
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <Button onClick={() => setIsEditing(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>
      {isEditing ? (
        <ProjectForm onClose={() => setIsEditing(false)} />
      ) : (
        isLoading ? <div>Loading...</div> : error ? <div>Error: {error}</div> :
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project: TProject, index: number) => (
              <Card
                key={project?.title}
                className="overflow-hidden group"
              >
                <div className="relative aspect-video">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.shortDescription.length > 200
                    ? `${project.shortDescription.substring(0, 120)}...`
                    : project.shortDescription}</p>


                  <div className="flex gap-2">
                    {project?.techStack?.slice(0, 3)?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-sm rounded backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <div className="flex justify-end px-4 gap-4 pb-4">
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(project._id)}>
                    Delete
                  </Button>
                  <Button variant="default" className="text-white" size="sm" onClick={() => setIsEditing(true)}>Edit</Button>
                </div>
              </Card>
            ))}
          </div>
      )}
    </div>
  );
}