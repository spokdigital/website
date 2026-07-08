"use client";
import { PlusIcon, CaretDownIcon, ImageIcon } from "@phosphor-icons/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useEditorCtx } from "../providers/editor-context";

const Insert = () => {
  const { editor, insertImage } = useEditorCtx();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-1 rounded px-2 py-1 text-sm text-foreground/70 hover:bg-foreground/10 transition-colors"
        >
          <PlusIcon size={14} /> Insert <CaretDownIcon size={12} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={insertImage}>Image</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          Bullet List
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          Ordered List
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          Code Block
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          Blockquote
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Insert;
