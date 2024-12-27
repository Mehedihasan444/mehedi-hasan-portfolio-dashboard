"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";
import { BlogEditor } from "@/components/blog-editor";

export default function BlogsPage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Blogs</h2>
        <Button onClick={() => setIsEditing(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Blog
        </Button>
      </div>

      {isEditing ? (
        <BlogEditor onClose={() => setIsEditing(false)} />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Getting Started with Next.js</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Learn how to build modern web applications with Next.js...
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-muted-foreground">2 days ago</span>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}