import { Button } from "@/components/ui/button";
export const ConfirmDialog = ({
  title,
  onConfirm,
  onCancel,
}: {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-xs"
      onClick={onCancel}
    />
    <div className="relative z-10 w-full max-w-sm rounded-xl border border-border bg-surface p-6 shadow-xl space-y-4">
      <div className="space-y-1">
        <h2 className="text-base font-semibold text-foreground">
          Delete post?
        </h2>
        <p className="text-sm text-foreground-muted">
          <span className="font-medium text-foreground">"{title}"</span> will be
          permanently deleted. This cannot be undone.
        </p>
      </div>
      <div className="flex justify-end gap-2 pt-1">
        <Button type="button" variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          type="button"
          onClick={onConfirm}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          Delete
        </Button>
      </div>
    </div>
  </div>
);
