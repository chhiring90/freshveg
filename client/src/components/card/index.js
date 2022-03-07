import React from "react";

import Button from "../button/index";
import { ProductOne } from "../../assets/images";
import { srcToAlt } from "../../helper/index";

export default function Card({ title, desc, price }) {
  return (
    <article className="flex flex-wrap border-2 p-3 border-slate-401 rounded-lg overflow-hidden">
      <figure className="overflow-hidden mb-3 w-full rounded-lg">
        <img
          className="object-cover w-full max-h-[220px] object-center"
          src={ProductOne}
          alt={srcToAlt(ProductOne)}
        />
      </figure>
      <h4 className="mb-1">{title}</h4>
      <p className="mb-1">{desc}</p>
      <footer className="pb-3 pt-1 flex items-center space-between w-full">
        <h4 className="mr-4 flex-grow">{price} USD</h4>
        <Button type="primary">Buy Now</Button>
      </footer>
    </article>
  );
}
