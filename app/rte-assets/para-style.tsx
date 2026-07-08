"use client";
import {
  TextHOneIcon,
  TextHTwoIcon,
  TextHThreeIcon,
  ParagraphIcon,
} from "@phosphor-icons/react";
import TB from "./Tbutton";
import { useEditorCtx } from "../providers/editor-context";

const PARA_STYLES = [
  { label: "Paragraph", value: "paragraph", icon: <ParagraphIcon /> },
  { label: "Heading 1", value: "h1", icon: <TextHOneIcon /> },
  { label: "Heading 2", value: "h2", icon: <TextHTwoIcon /> },
  { label: "Heading 3", value: "h3", icon: <TextHThreeIcon /> },
];

const ParaStyle = () => {
  const { editor, applyParaStyle } = useEditorCtx();
  return (
    <div className="flex gap-0.5">
      {PARA_STYLES.map((s) => (
        <TB
          title={s.label}
          key={s.value}
          onClick={() => applyParaStyle(s.value)}
          active={
            s.value === "paragraph"
              ? editor.isActive("paragraph")
              : editor.isActive("heading", {
                  level: s.value === "h1" ? 1 : s.value === "h2" ? 2 : 3,
                })
          }
        >
          {s.icon}
        </TB>
      ))}
    </div>
  );
};

export default ParaStyle;
