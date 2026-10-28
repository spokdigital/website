export default function SectionHeading({
  label,
  title,
  text,
  center = true,
}: {
  label?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  // Highlight "Get Started" and "Shopify"
  const parts = title.split(/(get started|shopify)/gi);

  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-xl"}>
      {label && (
        <p className="mx-auto w-full max-w-40 rounded-full border border-primary/40 px-3 py-1.5 text-sm font-semibold text-primary">
          {label}
        </p>
      )}

      <h2 className="mt-2 font-Satoshi text-3xl font-semibold tracking-tight md:text-5xl">
        {parts.map((part, index) => {
          if (part.toLowerCase() === "get started") {
            return (
              <span key={index} className="text-primary">
                {part}
              </span>
            );
          }

          if (part.toLowerCase() === "shopify") {
            return (
              <span key={index} className="text-lime-400">
                {part}
              </span>
            );
          }

          return part;
        })}
      </h2>

      {text && (
        <p className="mt-4 text-lg leading-relaxed text-foreground/70">
          {text}
        </p>
      )}
    </div>
  );
}