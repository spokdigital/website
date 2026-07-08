"use client";
import { useRef, useState, useCallback } from "react";
import { UploadSimpleIcon, XIcon, ImageIcon } from "@phosphor-icons/react";

interface ImageUploadProps {
  label?: string;
  hint?: string;
  aspectRatio?: string; // e.g. "1200/630" or "16/9"
  previewHeight?: string; // e.g. "h-48"
  onFileChange: (file: File | null, previewUrl: string) => void;
  previewUrl?: string;
}

export const ImageUpload = ({
  label,
  hint,
  aspectRatio,
  previewHeight = "h-48",
  onFileChange,
  previewUrl = "",
}: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const processFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;
      const url = URL.createObjectURL(file);
      onFileChange(file, url);
    },
    [onFileChange],
  );

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const clear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileChange(null, "");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="space-y-1.5">
      {label && (
        <label className="text-sm font-medium text-foreground">{label}</label>
      )}

      <div
        onClick={() => !previewUrl && inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`relative rounded-lg border-2 border-dashed transition-colors overflow-hidden
          ${previewUrl ? "border-border cursor-default" : "cursor-pointer hover:border-primary/60"}
          ${dragging ? "border-primary bg-primary/5" : "border-border bg-surface"}`}
      >
        {previewUrl ? (
          // ── Preview ──
          <div
            className={`relative w-full ${!aspectRatio ? previewHeight : ""}`}
            style={aspectRatio ? { aspectRatio, maxHeight: "220px" } : undefined}
          >
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            {/* overlay actions */}
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  inputRef.current?.click();
                }}
                className="flex items-center gap-1.5 rounded-md bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-800 hover:bg-white transition-colors"
              >
                <UploadSimpleIcon size={13} /> Replace
              </button>
              <button
                type="button"
                onClick={clear}
                className="flex items-center gap-1.5 rounded-md bg-white/90 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-white transition-colors"
              >
                <XIcon size={13} /> Remove
              </button>
            </div>
          </div>
        ) : (
          // ── Empty state ──
          <div className="flex flex-col items-center justify-center gap-2 py-10 px-4 text-center">
            <div className="rounded-full bg-foreground/5 p-3">
              <ImageIcon size={22} className="text-foreground-muted" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Drop image here or{" "}
                <span className="text-primary underline underline-offset-2">
                  browse
                </span>
              </p>
              <p className="mt-0.5 text-xs text-foreground-muted">
                PNG, JPG, WEBP up to 10MB
                {hint && ` · ${hint}`}
              </p>
            </div>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};