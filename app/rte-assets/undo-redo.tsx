// undo-redo.tsx
"use client";
import TB from "./Tbutton";
import { ArrowUUpLeftIcon, ArrowUUpRightIcon } from "@phosphor-icons/react";
import { useEditorCtx } from "../providers/editor-context";

const UndoRedo = () => {
  const { editor } = useEditorCtx();
  return (
    <div className="flex items-center gap-0.5">
      <TB
        onClick={() => editor.chain().focus().undo().run()}
        title="Undo"
        // no active state for undo — just opacity via disabled if you want
      >
        <ArrowUUpLeftIcon className={editor.can().undo() ? "" : "opacity-30"} />
      </TB>
      <TB onClick={() => editor.chain().focus().redo().run()} title="Redo">
        <ArrowUUpRightIcon
          className={editor.can().redo() ? "" : "opacity-30"}
        />
      </TB>
    </div>
  );
};

export default UndoRedo;
