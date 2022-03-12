import { motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/outline";

export default function Chip({ children, classes, size, clicked }) {
  switch (size) {
    case "sm":
      classes += " py-1 px-2";
      break;
    default:
      classes += " tracking-wide px-2 py-1";
      break;
  }

  return (
    <span
      className={`${
        classes && classes
      } font-mono bg-emerald-600/70 rounded-lg text-white inline-flex items-center`}
    >
      {children}
      {clicked && (
        <motion.button className="pl-1" onClick={clicked}>
          <XCircleIcon className="w-5 h-5" />
        </motion.button>
      )}
    </span>
  );
}
