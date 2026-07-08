const Logo = ({ src, className }: { src?: string; className?: string }) => {
  return src ? (
    <img src={src} className={className} alt="Logo" />
  ) : (
    <h2 className="text-4xl font-semibold">Logo</h2>
  );
};

export default Logo;
