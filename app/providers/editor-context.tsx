"use client";

import { createContext, useContext } from "react";
import { Editor, useEditorState } from "@tiptap/react";

interface EditorContextValue {
  editor: Editor;
  fontSize: number;
  changeFontSize: (delta: number) => void;
  setFontSizeDirect: (val: number) => void;
  currentParaStyle: () => string;
  applyParaStyle: (value: string) => void;
  currentFont: () => string;
  linkUrl: string;
  setLinkUrl: (v: string) => void;
  urlError: string;
  setUrlError: (v: string) => void;
  isLinkOpen: boolean;
  setIsLinkOpen: (v: boolean) => void;
  applyLink: () => void;
  removeLink: () => void;
  insertImage: () => void;
}

export const EditorContext = createContext<EditorContextValue | null>(null);

export function useEditorCtx() {
  const ctx = useContext(EditorContext);
  if (!ctx)
    throw new Error("useEditorCtx must be used inside EditorContext.Provider");
  return ctx;
}
export const useReactiveEditor = (editor: Editor | null) => {
  return useEditorState({
    editor,
    selector: (ctx) => ({
      isBold: ctx.editor?.isActive("bold"),
      isItalic: ctx.editor?.isActive("italic"),
      isUnderline: ctx.editor?.isActive("underline"),
      isStrike: ctx.editor?.isActive("strike"),
      isLink: ctx.editor?.isActive("link"),
      textAlign: {
        left: ctx.editor?.isActive({ textAlign: "left" }),
        center: ctx.editor?.isActive({ textAlign: "center" }),
        right: ctx.editor?.isActive({ textAlign: "right" }),
        justify: ctx.editor?.isActive({ textAlign: "justify" }),
      },
    }),
  });
};
