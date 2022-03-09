import PropTypes from "prop-types";

export default function Row({ children, classes }) {
  return (
    <div className={`-mx-4 flex flex-wrap ${classes ? classes : ""}`}>
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};
