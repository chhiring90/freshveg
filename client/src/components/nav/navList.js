import NavItem from "./navItem";

export default function NavList({ categories }) {
  return (
    <ul className="flex flex-wrap">
      {categories.map(({ label }, idx) => (
        <NavItem
          classes={`${idx === 0 ? "pr-4" : "px-4"} py-2`}
          key={idx}
          label={label}
        />
      ))}
    </ul>
  );
}
