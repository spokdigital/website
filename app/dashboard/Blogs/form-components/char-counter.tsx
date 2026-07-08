export const CharCounter = ({ value, max }: { value: string; max: number }) => {
  const len = value.length;
  const over = len > max;
  return (
    <p className={`text-xs text-right ${over ? "text-red-500" : "text-foreground-muted"}`}>
      {len} / {max}{over && " — too long"}
    </p>
  );
};