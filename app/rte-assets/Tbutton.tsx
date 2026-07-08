import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TB = ({
  onClick,
  active = false,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        type="button"
        onClick={onClick}
        title={title}
        className={`flex items-center justify-center rounded px-1.5 py-1 text-base transition-colors
      ${
        active
          ? "bg-primary text-white"
          : "text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
      }`}
      >
        {children}
      </button>
    </TooltipTrigger>
    <TooltipContent>
      <p>{title}</p>
    </TooltipContent>
  </Tooltip>
);
export default TB;
