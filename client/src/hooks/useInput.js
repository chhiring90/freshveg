import { useState } from "react";
import {
  isEmpty,
  isEmail,
  isStrongPassword,
  isMobilePhone,
  isPostalCode,
} from "validator";
import { EMAIL, PASSWORD, PHONENUMBER, ZIP } from "../contants/index";

export default function useInput(type, rules) {
  const [value, setValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  let isValid;

  if (isEmpty(value)) isValid = false;
  if (value && type === EMAIL.toLowerCase()) isValid = isEmail(value);
  if (value && type === PASSWORD.toLowerCase())
    isValid = isStrongPassword(value);
  if (value && type === PHONENUMBER.toLowerCase())
    isValid = isMobilePhone(value);
  if (value && type === ZIP.toLowerCase()) isValid = isPostalCode(value);

  const hasError = isTouch && !isValid;

  const changeHandler = ({ target }) => setValue(target.value);
  const blurHandler = () => setIsTouch(true);
  const reset = () => {
    setValue("");
    setIsTouch(false);
  };

  return {
    value,
    isValid,
    changeHandler,
    blurHandler,
    hasError,
    reset,
  };
}
