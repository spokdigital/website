

const Header = ({ total }: { total: number }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <h1 className="text-2xl font-semibold text-foreground tracking-tight">
          Blog Posts
        </h1>
        <p className="text-sm text-foreground-muted">
          {total} post{total !== 1 ? "s" : ""} total
        </p>
      </div>
     
    </div>
  );
};

export default Header;
