import PropTypes from "prop-types";
import NavList from "../nav/navList";
import Button from "../button/index";

export default function Sidebar({ title, menu, btnChildren }) {
  return (
    <aside>
      <h2 className="mb-3 capitalize">{title}</h2>
      <NavList menu={menu} classes="mb-3" />
      <Button type="secondary">{btnChildren}</Button>
    </aside>
  );
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
  btnChildren: PropTypes.node.isRequired,
};
