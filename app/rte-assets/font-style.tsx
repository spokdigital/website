"use client";
import { Extension } from "@tiptap/core";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import TB from "./Tbutton";
import { CaretDownIcon, MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { useEditorCtx } from "../providers/editor-context";

const FONTS = [
  "Arial",
  "Georgia",
  "Times New Roman",
  "Courier New",
  "Verdana",
  "Trebuchet MS",
];

export const FontSize = Extension.create({
  name: "fontSize",
  addOptions() {
    return { types: ["textStyle"] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (el) => el.style.fontSize || null,
            renderHTML: (attrs) =>
              attrs.fontSize ? { style: `font-size: ${attrs.fontSize}` } : {},
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize:
        (size: string) =>
        ({ chain }: { chain: any }) =>
          chain().setMark("textStyle", { fontSize: size }).run(),
      unsetFontSize:
        () =>
        ({ chain }: { chain: any }) =>
          chain().setMark("textStyle", { fontSize: null }).run(),
    };
  },
});

export const FontFamily = Extension.create({
  name: "fontFamily",
  addOptions() {
    return { types: ["textStyle"] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (el) => el.style.fontFamily || null,
            renderHTML: (attrs) =>
              attrs.fontFamily
                ? { style: `font-family: ${attrs.fontFamily}` }
                : {},
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontFamily:
        (family: string) =>
        ({ chain }: { chain: any }) =>
          chain().setMark("textStyle", { fontFamily: family }).run(),
    };
  },
});

// Separate UI component for the font family dropdown
export const FontFamilyBtn = () => {
  const { editor, currentFont } = useEditorCtx();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-1 rounded px-2 py-1 text-sm text-foreground/70 hover:bg-foreground/10 transition-colors"
        >
          <span className="w-28 text-left truncate">{currentFont()}</span>
          <CaretDownIcon size={12} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {FONTS.map((f) => (
          <DropdownMenuItem
            key={f}
            style={{ fontFamily: f }}
            onClick={() => editor.chain().focus().setFontFamily(f).run()}
          >
            {f}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const FontSizeBtn = () => {
  const { fontSize, changeFontSize, setFontSizeDirect } = useEditorCtx();
  return (
    <div className="flex items-center gap-0.5">
      <TB onClick={() => changeFontSize(-1)} title="Decrease Font Size">
        <MinusIcon size={14} />
      </TB>
      <input
        type="number"
        min={8}
        max={72}
        value={fontSize}
        onChange={(e) => setFontSizeDirect(Number(e.target.value))}
        className="w-10 rounded border border-border bg-surface text-center text-sm outline-hidden focus:border-primary [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <TB onClick={() => changeFontSize(1)} title="Increase Font Size">
        <PlusIcon size={14} />
      </TB>
    </div>
  );
};
