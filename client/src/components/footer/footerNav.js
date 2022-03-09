import NavList from "../nav/navList";

export default function FooterNav({ title, menu }) {
  return (
    <>
      <h4 className="mb-4">{title}</h4>
      <NavList menu={menu} />
    </>
  );
}
