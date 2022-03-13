import Chip from "../chip/index.js";

export default function Pagination() {
  return (
    <div className="flex items-center w-full">
      Page
      <ul className="flex items-center mr-auto">
        {[...new Array(4)].map((_, idx) => (
          <li
            key={idx}
            className="p-2 transition cursor-pointer hover:text-emerald-500"
          >
            {idx + 1}
          </li>
        ))}
      </ul>
      <span>
        Product <Chip size="sm">500</Chip>
      </span>
    </div>
  );
}
