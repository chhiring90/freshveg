import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function NavItem({ label, classes, path }) {
  return (
    <li className={classes}>
      <NavLink
        className="font-semibold transition hover:text-green-500"
        to={path}
      >
        {label}
      </NavLink>
    </li>
  );
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  classes: PropTypes.string,
};
