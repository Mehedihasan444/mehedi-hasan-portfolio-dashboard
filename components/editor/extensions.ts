import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Typography from "@tiptap/extension-typography";
import Placeholder from "@tiptap/extension-placeholder";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";

export const extensions = [


  StarterKit,
  Image,
  Link.configure({
    openOnClick: false,
    HTMLAttributes: {
      class: 'text-primary underline',
    },
  }),
  Underline,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  TextStyle,
  Color,
  Highlight,
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableCell,
  TableHeader,
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
  Typography,
  Placeholder.configure({
    placeholder: 'Write something...',
  }),
  Subscript,
  Superscript,
];