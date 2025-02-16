


    
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";
import { TagInput } from "../ui/tag-input";

const Editor = dynamic(() => import("./editor"), {
  ssr: false,
});

interface BlogEditorProps {
  onClose: () => void;
}

export function UpdateBlog({ onClose }: BlogEditorProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleSave = () => {
    // Save blog logic here
    onClose();
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
          title="Tags"
            value={tags}
            onChange={setTags}
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
            Save
          </Button>
        </div>
      </div>
    </Card>
  );
}