"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";
import { BlogEditor } from "@/components/editor/blog-editor";
import { UpdateBlog } from "@/components/editor/update-blog";
import { TBlog } from "@/interface";
import { baseURL } from "@/config";
import { fetchBlogData } from "./data";
import { Badge } from "@/components/ui/badge";

export default function BlogsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false)
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchBlogData();

        setBlogs(response.data); // Access the data array from response
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Blog data');
      } finally {
        setIsLoading(false);
      }
    };

    getBlogData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${baseURL}/blog/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setBlogs(blogs.filter(blog => blog._id !== id));
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      setError('Failed to delete blog');
    }
  }


  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Blogs</h2>
        <Button onClick={() => setIsAdding(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Blog
        </Button>
      </div>

      {isAdding ? (
        <BlogEditor onClose={() => setIsAdding(false)} />
      ) : isEditing ? <UpdateBlog onClose={() => setIsEditing(false)} /> : (isLoading ? <div>Loading...</div> : error ? <div>Error: {error}</div> :
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {
            blogs.map((blog: TBlog, index: number) =>
              <Card key={index}>
                <CardHeader>
                  <p className="text-sm text-muted-foreground " dangerouslySetInnerHTML={{ __html: blog.content.match(/<img[^>]*>/)?.[0] || '' }}>
                  </p>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-3">
                  {/* <h3 className="text-lg font-semibold"></h3> */}
                  <div className="flex justify-end items-center ">
                    <span className="text-xs text-muted-foreground">{Math.floor((Date.now() - new Date(blog.createdAt).getTime()) / (1000 * 60 * 60 * 24))} days ago</span>

                  </div>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardDescription  >
                    {blog.content.replace(/<[^>]+>/g, '').substring(0, 150)}...
                  </CardDescription>
                  <div className="space-x-1">
                    {
                      blog.tags.map((tag: string, index: number) => <Badge variant={"secondary"} key={index} className="text-xs">#{tag}</Badge>)
                    }
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => handleDelete(blog._id)}>Delete</Button>
                  <Button variant="secondary" size="sm" onClick={() => setIsEditing(true)}>
                    Edit</Button>
                </CardFooter>
              </Card>
            )
          }
        </div>
      )}
    </div>
  );
}



{/* <CardContent className="p-4">
<h3 className="text-lg font-semibold">Getting Started with Next.js</h3>
<p className="text-sm text-muted-foreground mt-2">
  Learn how to build modern web applications with Next.js...
</p>
<div className="flex justify-between items-center mt-4">
  <span className="text-sm text-muted-foreground">2 days ago</span>
  <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>

    Edit</Button>
</div>
</CardContent> */}