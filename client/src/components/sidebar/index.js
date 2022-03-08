import PropTypes from "prop-types";
import NavItem from "../nav/navItem";
import Button from "../button/index";

export default function Sidebar({ title, menu, btnChildren }) {
  return (
    <aside>
      <h2 className="mb-3 capitalize">{title}</h2>
      <ul className="mb-6">
        {menu.map(({ label }, idx) => (
          <NavItem classes="mb-2" label={label} key={idx} />
        ))}
      </ul>
      <Button type="secondary">{btnChildren}</Button>
    </aside>
  );
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
  btnChildren: PropTypes.node.isRequired,
};
