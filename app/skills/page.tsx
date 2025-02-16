"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { SkillForm } from "./skill-form";

export default function SkillsPage() {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="p-8 space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
                <Button onClick={() => setIsEditing(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Skill
                </Button>
            </div>

            {isEditing ? (
                <SkillForm onClose={() => setIsEditing(false)} />
            ) : (
                <div className="grid gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Frontend Development</h3>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm flex items-center">
                                    React
                                    <span className="ml-2 text-xs bg-primary/20 rounded-full px-2">Expert</span>
                                </div>
                                <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm flex items-center">
                                    TypeScript
                                    <span className="ml-2 text-xs bg-primary/20 rounded-full px-2">Advanced</span>
                                </div>
                                <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm flex items-center">
                                    Next.js
                                    <span className="ml-2 text-xs bg-primary/20 rounded-full px-2">Expert</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Backend Development</h3>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm flex items-center">
                                    Node.js
                                    <span className="ml-2 text-xs bg-primary/20 rounded-full px-2">Advanced</span>
                                </div>
                                <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm flex items-center">
                                    PostgreSQL
                                    <span className="ml-2 text-xs bg-primary/20 rounded-full px-2">Intermediate</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}