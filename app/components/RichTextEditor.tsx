"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageExt from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import CharacterCount from "@tiptap/extension-character-count";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import { isValidUrl } from "@/lib/isvalidurl";
import {
  FontSize,
  FontFamily,
  FontSizeBtn,
  FontFamilyBtn,
} from "../rte-assets/font-style";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import UndoRedo from "../rte-assets/undo-redo";
import TB from "../rte-assets/Tbutton";
import Insert from "../rte-assets/insert";
import { useState } from "react";
import {
  TextBolderIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  TextAlignJustifyIcon,
  TextIndentIcon,
  TextOutdentIcon,
  TextUnderlineIcon,
  MinusSquareIcon,
  HighlighterIcon,
} from "@phosphor-icons/react";
import ParaStyle from "../rte-assets/para-style";
import LinkBtn from "../rte-assets/link-btn";
import { EditorContext } from "../providers/editor-context";

const Divider = () => <div className="mx-0.5 w-px self-stretch bg-border" />;

interface Props {
  value?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Start writing...",
}: Props) {
  const [linkUrl, setLinkUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [, rerender] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ horizontalRule: false }),
      HorizontalRule,
      ImageExt,
      Link.extend({ inclusive: false }).configure({ openOnClick: false }),
      Placeholder.configure({ placeholder }),
      CharacterCount,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Underline,
      TextStyle,
      FontFamily,
      Color,
      Highlight.configure({ multicolor: true }),
      FontSize,
    ],
    content: value || "",
    onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
    onTransaction: () => rerender((n) => n + 1), // re-render on every doc change
    onSelectionUpdate: () => rerender((n) => n + 1), // re-render on cursor move
  });

  if (!editor) return null;

  const changeFontSize = (delta: number) => {
    const next = Math.min(72, Math.max(8, fontSize + delta));
    setFontSize(next);
    editor.chain().focus().setFontSize(`${next}px`).run();
  };

  const setFontSizeDirect = (val: number) => {
    const clamped = Math.min(72, Math.max(8, val));
    setFontSize(clamped);
    editor.chain().focus().setFontSize(`${clamped}px`).run();
  };

  const currentParaStyle = () => {
    if (editor.isActive("heading", { level: 1 })) return "Heading 1";
    if (editor.isActive("heading", { level: 2 })) return "Heading 2";
    if (editor.isActive("heading", { level: 3 })) return "Heading 3";
    return "Paragraph";
  };

  const applyParaStyle = (value: string) => {
    if (value === "paragraph") editor.chain().focus().setParagraph().run();
    else if (value === "h1")
      editor.chain().focus().toggleHeading({ level: 1 }).run();
    else if (value === "h2")
      editor.chain().focus().toggleHeading({ level: 2 }).run();
    else if (value === "h3")
      editor.chain().focus().toggleHeading({ level: 3 }).run();
  };

  const currentFont = () =>
    editor.getAttributes("textStyle").fontFamily ?? "Arial";

  const applyLink = () => {
    if (!linkUrl.trim()) {
      editor.chain().focus().unsetLink().run();
      setIsLinkOpen(false);
      return;
    }
    const { valid, full } = isValidUrl(linkUrl);
    if (!valid) {
      setUrlError("Please enter a valid URL (e.g. https://example.com)");
      return;
    }
    editor.chain().focus().setLink({ href: full }).run();
    setLinkUrl("");
    setUrlError("");
    setIsLinkOpen(false);
  };

  const removeLink = () => {
    editor.chain().focus().unsetLink().run();
    setLinkUrl("");
    setUrlError("");
    setIsLinkOpen(false);
  };

  const insertImage = () => {
    const url = window.prompt("Image URL");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  return (
    <div className="rte-editor overflow-hidden rounded-lg border border-border">
      <EditorContext.Provider
        value={{
          editor,
          fontSize,
          changeFontSize,
          setFontSizeDirect,
          currentParaStyle,
          applyParaStyle,
          currentFont,
          linkUrl,
          setLinkUrl,
          urlError,
          setUrlError,
          isLinkOpen,
          setIsLinkOpen,
          applyLink,
          removeLink,
          insertImage,
        }}
      >
        <div className="flex flex-wrap items-center gap-0.5 border-b border-border bg-surface px-2 py-1.5">
          <UndoRedo />
          <Divider />
          <ParaStyle />
          <Divider />
          <FontFamilyBtn />
          <Divider />

          {/* Text align */}
          <TB
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            active={editor.isActive({ textAlign: "left" })}
            title="Align Left"
          >
            <TextAlignLeftIcon />
          </TB>
          <TB
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            active={editor.isActive({ textAlign: "center" })}
            title="Align Center"
          >
            <TextAlignCenterIcon />
          </TB>
          <TB
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            active={editor.isActive({ textAlign: "right" })}
            title="Align Right"
          >
            <TextAlignRightIcon />
          </TB>
          <TB
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            active={editor.isActive({ textAlign: "justify" })}
            title="Justify"
          >
            <TextAlignJustifyIcon />
          </TB>
          <Divider />

          {/* Indent */}
          <TB
            onClick={() =>
              editor.chain().focus().liftListItem("listItem").run()
            }
            title="Decrease Indent"
          >
            <TextOutdentIcon />
          </TB>
          <TB
            onClick={() =>
              editor.chain().focus().sinkListItem("listItem").run()
            }
            title="Increase Indent"
          >
            <TextIndentIcon />
          </TB>
          <Divider />

          {/* Text color */}
          <div className="relative flex items-center" title="Text Color">
            <label className="flex cursor-pointer flex-col items-center">
              <span
                className="text-base font-bold text-foreground/70"
                style={{ lineHeight: 1 }}
              >
                A
              </span>
              <input
                type="color"
                className="absolute h-0 w-0 opacity-0"
                onInput={(e) =>
                  editor
                    .chain()
                    .focus()
                    .setColor((e.target as HTMLInputElement).value)
                    .run()
                }
              />
              <div
                className="mt-0.5 h-[3px] w-4 rounded-full"
                style={{
                  background: editor.getAttributes("textStyle").color ?? "#000",
                }}
              />
            </label>
          </div>

          {/* Highlight color */}
          <div className="relative flex items-center" title="Highlight Color">
            <label className="flex cursor-pointer flex-col items-center px-1">
              <span
                className="text-base text-foreground/70"
                style={{ lineHeight: 1 }}
              >
                <HighlighterIcon />
              </span>
              <input
                type="color"
                className="absolute h-0 w-0 opacity-0"
                onInput={(e) =>
                  editor
                    .chain()
                    .focus()
                    .setHighlight({
                      color: (e.target as HTMLInputElement).value,
                    })
                    .run()
                }
              />
              <div
                className="mt-0.5 h-[3px] w-4 rounded-full"
                style={{
                  background:
                    editor.getAttributes("highlight").color ?? "#ffff00",
                }}
              />
            </label>
          </div>
          <Divider />

          <TB
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="Horizontal Rule"
          >
            <MinusSquareIcon />
          </TB>
          <Divider />

          <FontSizeBtn />
          <Divider />

          {/* Bold / Italic / Underline / Strike — active prop re-evaluates on every render */}
          <TB
            onClick={() => editor.chain().focus().toggleBold().run()}
            active={editor.isActive("bold")}
            title="Bold"
          >
            <TextBolderIcon />
          </TB>
          <TB
            onClick={() => editor.chain().focus().toggleItalic().run()}
            active={editor.isActive("italic")}
            title="Italic"
          >
            <TextItalicIcon />
          </TB>
          <TB
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            active={editor.isActive("underline")}
            title="Underline"
          >
            <TextUnderlineIcon />
          </TB>
          <TB
            onClick={() => editor.chain().focus().toggleStrike().run()}
            active={editor.isActive("strike")}
            title="Strikethrough"
          >
            <TextStrikethroughIcon />
          </TB>
          <Divider />
          <LinkBtn />
          <Divider />
          <Insert />
        </div>

        {/* EditorContent INSIDE provider so context is available if needed */}
        <EditorContent editor={editor} className="bg-surface min-h-[280px]" />
        <div className="border-t border-border px-3 py-1 text-right text-xs text-foreground-muted">
          {editor.storage.characterCount.characters()} characters
        </div>
      </EditorContext.Provider>
    </div>
  );
}
