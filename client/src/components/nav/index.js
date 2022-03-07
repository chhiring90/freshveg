import React from "react";
import NavList from "./navList";

const categories = [
  { label: "Bakery" },
  { label: "Fruit And Vegeables" },
  { label: "Meat and Fish" },
  { label: "Drinks" },
  { label: "Kitchen" },
  { label: "Special Nutrition" },
  { label: "Baby" },
  { label: "Pharmacy" },
];

export default function Nav() {
  return (
    <nav>
      <NavList categories={categories} />
    </nav>
  );
}
