export default function Chip({ children, classes }) {
  return (
    <span
      className={`${classes} font-mono bg-emerald-600/70 tracking-wide px-2 py-1 rounded-lg text-white`}
    >
      {children}
    </span>
  );
}
