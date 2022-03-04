import PropTypes from "prop-types";

export default function Row({ children }) {
  return <div className="-mx-4">{children}</div>;
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};
