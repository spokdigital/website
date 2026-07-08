"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDotsIcon } from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CharCounter } from "./char-counter";
import type { FormData } from "./types";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
type FormFieldChange = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

interface Props {
  formData: FormData;
  set: (field: keyof FormData) => (e: FormFieldChange) => void;
  setFormData: (data: FormData | ((prev: FormData) => FormData)) => void;
}

export const CoreFields = ({ formData, set, setFormData }: Props) => {
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setFormData((prev) => ({
      ...prev,
      publishedAt: selectedDate ? selectedDate.toISOString().split("T")[0] : "",
    }));
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="space-y-1.5">
        <Label htmlFor="title">
          Title <span className="text-red-500">*</span>
        </Label>

        <Input
          id="title"
          placeholder="Enter post title"
          value={formData.title}
          onChange={set("title")}
          required
        />

        <CharCounter value={formData.title} max={70} />
      </div>

      {/* Slug */}
      <div className="space-y-1.5">
        <Label htmlFor="slug">Slug</Label>

        <div className="flex items-center rounded-md border border-border bg-surface overflow-hidden focus-within:border-primary transition-colors">
          <span className="px-3 py-2 text-sm text-foreground-muted border-r border-border bg-surface select-none">
            /blog/
          </span>

          <input
            id="slug"
            className="flex-1 px-3 py-2 text-sm bg-transparent outline-hidden text-foreground placeholder:text-foreground-muted"
            placeholder="auto-generated-from-title"
            value={formData.slug}
            onChange={set("slug")}
          />
        </div>
      </div>

      {/* Author + Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="author">Author</Label>

          <Input
            id="author"
            placeholder="Author name"
            value={formData.author}
            onChange={set("author")}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="publishedAt">Publish Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="flex py-3 h-10 rounded-md bg-surface justify-between w-full"
                variant="outline"
              >
                <span>
                  {formData.publishedAt
                    ? new Date(formData.publishedAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        },
                      )
                    : "Select date"}
                </span>
                <span>
                  <CalendarDotsIcon />
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className=" w-auto rounded-xl  p-0" align="center">
              <Calendar
                mode="single"
                selected={
                  formData.publishedAt
                    ? new Date(formData.publishedAt)
                    : undefined
                }
                onSelect={handleDateSelect}
                className="rounded-xl w-full"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};
