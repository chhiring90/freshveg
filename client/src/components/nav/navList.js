import PropTypes from "prop-types";
import NavItem from "./navItem";

export default function NavList({ menu, classes, isInline }) {
  let itemClasses = (idx) => (idx === 0 ? "pr-4 py-2" : "px-4 py-2");

  return (
    <ul className={classes}>
      {menu.map(({ label }, idx) => (
        <NavItem
          classes={`${isInline ? itemClasses(idx) : "mb-3"}`}
          key={idx}
          label={label}
          path={`${label}`.split(" ").join("-").toLowerCase()}
        />
      ))}
    </ul>
  );
}

NavList.propTypes = {
  menu: PropTypes.array.isRequired,
  classes: PropTypes.string,
  isInline: PropTypes.bool,
};
