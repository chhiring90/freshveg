import { NavLink } from "react-router-dom";
import { Column, Row } from "../layout/index";

const navPaths = [
  {
    value: "Chat With Us",
    path: "./chatwithus",
  },
  {
    value: "+911-4356789108",
    path: "tel:9114356789108",
  },
  {
    value: "info@freshveg.com",
    path: "mailto:info@freshveg.com",
  },
  {
    value: "Blog",
    path: "/blog",
  },
  {
    value: "About Us",
    path: "/about",
  },
  {
    value: "Careers",
    path: "/careers",
  },
];

export default function TopNav() {
  const classes = "text-gray-500 hover:text-green-500";
  return (
    <nav className="flex text-sm space-between">
      <ul className="w-2/4 flex">
        {navPaths.slice(0, 3).map(({ value, path }, idx) => (
          <li key={idx} className="px-2">
            <NavLink className={classes} to={path}>
              {value}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="w-2/4 flex justify-end">
        {navPaths.slice(3).map(({ value, path }, idx) => (
          <li key={idx} className="px-2">
            <NavLink className={classes} to={path}>
              {value}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
