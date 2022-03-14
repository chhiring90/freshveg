import Select from "./select";
import { INPUT, SELECT, TEXTAREA } from "../../contants/index";

export default function Input({
  classes,
  elementType,
  options,
  label,
  children,
  ...props
}) {
  let inputElement = null;
  switch (elementType) {
    case INPUT:
      inputElement = <input {...props} />;
      break;
    case SELECT:
      inputElement = <Select options={options} />;
      break;
    case TEXTAREA:
      inputElement = <textarea>{children}</textarea>;
      break;
    default:
      break;
  }

  return (
    <div className={classes}>
      {label && (
        <label
          className="mb-2 block font-semibold tracking-wide"
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      {inputElement}
    </div>
  );
}
