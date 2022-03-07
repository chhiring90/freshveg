import PropTypes from "prop-types";

export default function Button({ type, children, clicked }) {
  let classes = [
    "px-4 transition rounded-lg py-2 border-2 font-semibold tracking-wider text-default",
  ];

  switch (type) {
    case "primary":
      classes.push(
        "border-emerald-600 bg-emerald-600 text-white hover:bg-transparent hover:text-emerald-600"
      );
      break;
    case "secondary":
      classes.push(
        "border-slate-400 bg-slate-400 text-white hover:bg-transparent hover:text-slate-400"
      );
      break;
    default:
      break;
  }

  return <button className={classes.join(" ")}>{children}</button>;
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  clicked: PropTypes.func,
};
