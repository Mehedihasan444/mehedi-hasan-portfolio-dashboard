// "use client";

// import { Editor } from '@tiptap/react';
// import { Button } from "@/components/ui/button";
// import {
//   Bold, Italic, Underline, Strikethrough, 
//   List, ListOrdered, Quote, Heading1, Heading2,
//   Image as ImageIcon, Link, Code, Table, 
//   AlignLeft, AlignCenter, AlignRight, AlignJustify,
//   Undo, Redo, CheckSquare, Superscript, Subscript,
//   Highlighter
// } from "lucide-react";

// interface MenuBarProps {
//   editor: Editor | null;
//   onImageClick: () => void;
// }

// export function MenuBar({ editor, onImageClick }: MenuBarProps) {
//   if (!editor) return null;

//   return (
//     <div className="border-b p-2 flex flex-wrap gap-2">
//       <div className="flex gap-1 items-center border-r pr-2">
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleBold().run()}
//           className={editor.isActive("bold") ? "bg-secondary" : ""}
//         >
//           <Bold className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//           className={editor.isActive("italic") ? "bg-secondary" : ""}
//         >
//           <Italic className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleUnderline().run()}
//           className={editor.isActive("underline") ? "bg-secondary" : ""}
//         >
//           <Underline className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleStrike().run()}
//           className={editor.isActive("strike") ? "bg-secondary" : ""}
//         >
//           <Strikethrough className="h-4 w-4" />
//         </Button>
//       </div>

//       <div className="flex gap-1 items-center border-r pr-2">
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//           className={editor.isActive("heading", { level: 1 }) ? "bg-secondary" : ""}
//         >
//           <Heading1 className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//           className={editor.isActive("heading", { level: 2 }) ? "bg-secondary" : ""}
//         >
//           <Heading2 className="h-4 w-4" />
//         </Button>
//       </div>

//       <div className="flex gap-1 items-center border-r pr-2">
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//           className={editor.isActive("bulletList") ? "bg-secondary" : ""}
//         >
//           <List className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           className={editor.isActive("orderedList") ? "bg-secondary" : ""}
//         >
//           <ListOrdered className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleTaskList().run()}
//           className={editor.isActive("taskList") ? "bg-secondary" : ""}
//         >
//           <CheckSquare className="h-4 w-4" />
//         </Button>
//       </div>

//       <div className="flex gap-1 items-center border-r pr-2">
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().setTextAlign('left').run()}
//           className={editor.isActive({ textAlign: 'left' }) ? "bg-secondary" : ""}
//         >
//           <AlignLeft className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().setTextAlign('center').run()}
//           className={editor.isActive({ textAlign: 'center' }) ? "bg-secondary" : ""}
//         >
//           <AlignCenter className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().setTextAlign('right').run()}
//           className={editor.isActive({ textAlign: 'right' }) ? "bg-secondary" : ""}
//         >
//           <AlignRight className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().setTextAlign('justify').run()}
//           className={editor.isActive({ textAlign: 'justify' }) ? "bg-secondary" : ""}
//         >
//           <AlignJustify className="h-4 w-4" />
//         </Button>
//       </div>

//       <div className="flex gap-1 items-center border-r pr-2">
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleSuperscript().run()}
//           className={editor.isActive("superscript") ? "bg-secondary" : ""}
//         >
//           <Superscript className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleSubscript().run()}
//           className={editor.isActive("subscript") ? "bg-secondary" : ""}
//         >
//           <Subscript className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleHighlight().run()}
//           className={editor.isActive("highlight") ? "bg-secondary" : ""}
//         >
//           <Highlighter className="h-4 w-4" />
//         </Button>
//       </div>

//       <div className="flex gap-1 items-center border-r pr-2">
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}
//           className={editor.isActive("blockquote") ? "bg-secondary" : ""}
//         >
//           <Quote className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//           className={editor.isActive("codeBlock") ? "bg-secondary" : ""}
//         >
//           <Code className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => {
//             const url = window.prompt('Enter URL');
//             if (url) {
//               editor.chain().focus().setLink({ href: url }).run();
//             }
//           }}
//           className={editor.isActive("link") ? "bg-secondary" : ""}
//         >
//           <Link className="h-4 w-4" />
//         </Button>
//       </div>

//       <div className="flex gap-1 items-center border-r pr-2">
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => {
//             editor.chain().focus().insertTable({
//               rows: 3,
//               cols: 3,
//               withHeaderRow: true
//             }).run()
//           }}
//         >
//           <Table className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={onImageClick}
//         >
//           <ImageIcon className="h-4 w-4" />
//         </Button>
//       </div>

//       <div className="flex gap-1 items-center">
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().undo().run()}
//         >
//           <Undo className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => editor.chain().focus().redo().run()}
//         >
//           <Redo className="h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//   );
// }


"use client";

import { Editor } from '@tiptap/react';
import { Button } from "@/components/ui/button";
import {
  Bold, Italic, Underline, Strikethrough, 
  List, ListOrdered, Quote, Heading1, Heading2,
  Image as ImageIcon, Link, Code, Table, 
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Undo, Redo, CheckSquare, Superscript, Subscript,
  Highlighter
} from "lucide-react";

interface MenuBarProps {
  editor: Editor | null;
  onImageClick: () => void;
}

export function MenuBar({ editor, onImageClick }: MenuBarProps) {
  if (!editor) return null;

  return (
    <div className="border-b p-2 flex flex-wrap gap-2">
      <div className="flex gap-1 items-center border-r pr-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "bg-secondary" : ""}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "bg-secondary" : ""}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "bg-secondary" : ""}
        >
          <Underline className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "bg-secondary" : ""}
        >
          <Strikethrough className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-1 items-center border-r pr-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive("heading", { level: 1 }) ? "bg-secondary" : ""}
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "bg-secondary" : ""}
        >
          <Heading2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-1 items-center border-r pr-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "bg-secondary" : ""}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "bg-secondary" : ""}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          className={editor.isActive("taskList") ? "bg-secondary" : ""}
        >
          <CheckSquare className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-1 items-center border-r pr-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? "bg-secondary" : ""}
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? "bg-secondary" : ""}
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? "bg-secondary" : ""}
        >
          <AlignRight className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={editor.isActive({ textAlign: 'justify' }) ? "bg-secondary" : ""}
        >
          <AlignJustify className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-1 items-center border-r pr-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={editor.isActive("superscript") ? "bg-secondary" : ""}
        >
          <Superscript className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={editor.isActive("subscript") ? "bg-secondary" : ""}
        >
          <Subscript className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive("highlight") ? "bg-secondary" : ""}
        >
          <Highlighter className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-1 items-center border-r pr-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "bg-secondary" : ""}
        >
          <Quote className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "bg-secondary" : ""}
        >
          <Code className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            const url = window.prompt('Enter URL');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={editor.isActive("link") ? "bg-secondary" : ""}
        >
          <Link className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-1 items-center border-r pr-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            editor.chain().focus().insertTable({
              rows: 3,
              cols: 3,
              withHeaderRow: true
            }).run()
          }}
        >
          <Table className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onImageClick}
        >
          <ImageIcon className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-1 items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().undo().run()}
        >
          <Undo className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Redo className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}