import PropTypes from "prop-types";

export default function Column({ children, classes }) {
  return <div className={`${classes ? classes : ""} px-4`}>{children}</div>;
}

PropTypes.Column = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string.isRequired,
};
