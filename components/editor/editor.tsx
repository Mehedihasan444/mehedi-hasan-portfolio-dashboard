"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { MenuBar } from "./menu-bar";
import { extensions } from "./extensions"
import { useRef } from "react";
import { Input } from "../ui/input";
interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {


  const imageInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions,
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none focus:outline-none h-full ',
      },
    },
  });
  if (!editor) {
    return null;
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editor) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        editor.chain().focus().setImage({ src: imageUrl }).run();
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="border rounded-lg">

      <MenuBar editor={editor}
        onImageClick={() => imageInputRef.current?.click()} />
      <Input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />
      <EditorContent editor={editor} className="p-4 min-h-[200px] prose prose-sm max-w-none" />
    </div>
  );
}