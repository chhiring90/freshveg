import { useState } from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

import Button from "../button/index";
import { ProductOne } from "../../assets/images";
import { srcToAlt } from "../../helper/index";

export default function Card({ discount, title, desc, price }) {
  const [isFavourite, setIsFavourite] = useState(false);

  const favouriteVariants = {
    active: {
      backgroundColor: "#f472b6",
    },
    inactive: {
      borderRadius: "8px",
    },
  };

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <article className="flex flex-wrap border-2 p-3 border-slate-500 rounded-lg overflow-hidden font-semibold tracking-wider">
      <figure className="overflow-hidden relative mb-3 w-full rounded-lg">
        <motion.button
          variants={favouriteVariants}
          animate={isFavourite ? "active" : "inactive"}
          initial="inactive"
          className="outline-offset-0 absolute z-10 top-2 right-2 h-6 w-6 flex items-center justify-center"
          onClick={toggleFavourite}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "tween" }}
        >
          <HeartIcon
            className={`transition transform h-6 w-6 ${
              isFavourite ? "text-white scale-75" : "text-pink-400"
            }`}
          />
        </motion.button>
        <span className="absolute font-mono bg-emerald-600/70 tracking-wide px-2 py-1 rounded-lg text-white top-2 left-2">
          {discount}
        </span>
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
