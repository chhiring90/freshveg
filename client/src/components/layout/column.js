import PropTypes from "prop-types";

export default function Column({ children, size }) {
  const classes = ["px-4"];

  size && classes.push(size);
  return <div className={classes.join(" ")}>{children}</div>;
}

PropTypes.Column = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
};
