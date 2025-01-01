"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TagInput } from "../../components/ui/tag-input";
import { baseURL } from "@/config";
import { toast } from "sonner";

interface ProjectFormProps {
  onClose: () => void;
}
export function ProjectForm({ onClose, }: ProjectFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [shortDescription, setShortDescription] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);
  const [clientRepoUrl, setClientRepoUrl] = useState("");
  const [clientLiveUrl, setClientLiveUrl] = useState("");
  const [serverRepoUrl, setServerRepoUrl] = useState("");
  const [serverLiveUrl, setServerLiveUrl] = useState("");
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const previews = fileArray.map(file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise<string>((resolve) => {
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
        });
      });

      Promise.all(previews).then(images => {
        setImagePreviews(images);
      });
    }
  };


  const handleSave = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData();
    // Append image files
    const fileInput = document.getElementById('picture') as HTMLInputElement;
    if (fileInput && fileInput.files) {
      Array.from(fileInput.files).forEach(file => {
        formData.append('images', file);
      });
    }

    // Append other data
    const data = {
      title,
      description,
      technologies,
      shortDescription,
      startingDate,
      endingDate,
      keyFeatures,
      clientSide: {
        repositoryUrl: clientRepoUrl,
        liveUrl: clientLiveUrl,
      },
      serverSide: {
        repositoryUrl: serverRepoUrl,
        liveUrl: serverLiveUrl,
      },
    };
    formData.append('data', JSON.stringify(data));

    // Send data to the backend
    fetch(`${baseURL}/projects`, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        if (data.success) {
          toast.success('Project created successfully');
          onClose();

        } else if (data.success === false) {
          toast.error('Failed to create project');

        }
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Something went wrong');
      });
  };


  return (
    <Card className="p-4">
      <form onSubmit={handleSave}>

        <div className="space-y-4">
          <div className="sm:flex gap-4  items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" name="picture" type="file" multiple onChange={handleImageChange} />
            </div>

            <div className="flex gap-2 items-center">
              {/* image preview */}
              {imagePreviews.map((image, index) => (
                <img key={index} src={image} alt={`Image Preview ${index + 1}`} className="mt-2 h-20 rounded-lg w-20 object-cover" />
              ))}
            </div>
          </div>
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
            <Label htmlFor="shortDescription">Short Description</Label>
            <Input
              id="shortDescription"
              placeholder="Enter short description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
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
            <TagInput
              value={technologies}
              onChange={setTechnologies}
              title="technologies"
            />
            {/* <Input
              id="technologies"
              placeholder="e.g., React, TypeScript, Node.js"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
            /> */}
          </div>
          <div className="sm:flex gap-4 justify-between items-center">

            <div className="space-y-2 flex-1">
              <Label htmlFor="startingDate">Starting Date</Label>
              <Input
                id="startingDate"
                type="date"
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
              />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="endingDate">Ending Date</Label>
              <Input
                id="endingDate"
                type="date"
                value={endingDate}
                onChange={(e) => setEndingDate(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="keyFeatures">Key Features</Label>
            <TagInput
              value={keyFeatures}
              onChange={setKeyFeatures}
              title="key features"
            />
            {/* <Textarea
              id="keyFeatures"
              placeholder="Enter key features"
              value={keyFeatures}
              onChange={(e) => setKeyFeatures(e.target.value)}
            /> */}
          </div>
          <div className="sm:flex gap-4 justify-between items-center">  <div className="space-y-2 flex-1">
            <Label htmlFor="clientRepoUrl">Client Repository URL</Label>
            <Input
              id="clientRepoUrl"
              placeholder="Enter client repository URL"
              value={clientRepoUrl}
              onChange={(e) => setClientRepoUrl(e.target.value)}
            />
          </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="clientLiveUrl">Client Live URL</Label>
              <Input
                id="clientLiveUrl"
                placeholder="Enter client live URL"
                value={clientLiveUrl}
                onChange={(e) => setClientLiveUrl(e.target.value)}
              />
            </div></div>
          <div className="sm:flex gap-4 justify-between items-center">  <div className="space-y-2 flex-1">
            <Label htmlFor="serverRepoUrl">Server Repository URL</Label>
            <Input
              id="serverRepoUrl"
              placeholder="Enter server repository URL"
              value={serverRepoUrl}
              onChange={(e) => setServerRepoUrl(e.target.value)}
            />
          </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="serverLiveUrl">Server Live URL</Label>
              <Input
                id="serverLiveUrl"
                placeholder="Enter server live URL"
                value={serverLiveUrl}
                onChange={(e) => setServerLiveUrl(e.target.value)}
              />
            </div></div>


          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Save
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
}