import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
export const StatusBadge = ({ status }: { status: string }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium
      ${
        status === "published"
          ? "bg-green-500/10 text-green-600"
          : "bg-yellow-500/10 text-yellow-600"
      }`}
  >
    {status === "published" ? (
      <EyeIcon size={11} />
    ) : (
      <EyeSlashIcon size={11} />
    )}
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </span>
);
