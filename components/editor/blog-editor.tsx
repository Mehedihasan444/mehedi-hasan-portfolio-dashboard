// "use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";
import { TagInput } from "../ui/tag-input";
import { toast } from "sonner";
import { baseURL } from "@/config";

const Editor = dynamic(() => import("./editor"), {
  ssr: false,
});

interface BlogEditorProps {
  onClose: () => void;
}

export function BlogEditor({ onClose }: BlogEditorProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleSave = async () => {
    const blogData = {
      title,
      tags,
      content
    }

console.log(blogData)
    // try {
    //   const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogs`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(blogData),
    //   });

    //   const data = await response.json();
    //   if (response.ok) {
    //     alert('Data saved successfully!');
    //   } else {
    //     alert(`Error: ${data.message}`);
    //   }
    // } catch (error) {
    //   console.error('Error submitting data:', error);
    // }

    // Save blog logic here
    // onClose();
 
    try {
      const response = await fetch(`${baseURL}/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });
    
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save blog');
      }
    
      toast.success('Blog saved successfully!');
    } catch (error) {
      toast.error(`Something went wrong!`);
      console.error('Error:', error);
    }
    
  };


  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Tags</Label>
          <TagInput
            value={tags}
            onChange={setTags}
            title="tags"
          />
        </div>

        <div className="space-y-2">
          <Label>Content</Label>
          <Editor
            value={content}
            onChange={setContent}
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
}