import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function NavItem({ label, classes }) {
  return (
    <li className={classes && classes}>
      <NavLink
        className="font-semibold transition hover:text-green-500"
        to={`${label}`.split(" ").join("-").toLowerCase()}
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
