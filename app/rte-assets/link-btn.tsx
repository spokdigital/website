"use client";
import { LinkIcon } from "@phosphor-icons/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useEditorCtx } from "../providers/editor-context";

const LinkBtn = () => {
  const {
    editor,
    isLinkOpen,
    setIsLinkOpen,
    linkUrl,
    setLinkUrl,
    urlError,
    setUrlError,
    applyLink,
    removeLink,
  } = useEditorCtx();

  return (
    <Popover
      open={isLinkOpen}
      onOpenChange={(o) => {
        if (o) {
          setLinkUrl(editor.getAttributes("link").href ?? "");
          setUrlError("");
        }
        setIsLinkOpen(o);
      }}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          title="Insert Link"
          className={`flex items-center justify-center rounded px-1.5 py-1 text-base transition-colors
            ${editor.isActive("link") ? "bg-primary text-white" : "text-foreground/60 hover:bg-foreground/10 hover:text-foreground"}`}
        >
          <LinkIcon />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <p className="text-sm font-semibold">Insert Link</p>
        <div className="mt-3 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <input
              autoFocus
              type="url"
              placeholder="https://example.com"
              value={linkUrl}
              onChange={(e) => {
                setLinkUrl(e.target.value);
                if (urlError) setUrlError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && applyLink()}
              className={`w-full rounded border bg-surface px-2 py-1.5 text-sm outline-hidden transition-colors
                ${urlError ? "border-red-500" : "border-border focus:border-primary"}`}
            />
            {urlError && <p className="text-xs text-red-500">{urlError}</p>}
          </div>
          <div className="flex justify-end gap-2">
            {editor.isActive("link") && (
              <Button size="sm" variant="secondary" onClick={removeLink}>
                Remove
              </Button>
            )}
            <Button size="sm" onClick={applyLink}>
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LinkBtn;
