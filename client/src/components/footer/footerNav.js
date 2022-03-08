import NavItem from "../nav/navItem";

export default function FooterNav({ title, menu }) {
  return (
    <>
      <h4 className="mb-4">{title}</h4>
      <ul>
        {menu.map(({ label }, idx) => (
          <NavItem classes="mb-3" label={label} key={idx} />
        ))}
      </ul>
    </>
  );
}
