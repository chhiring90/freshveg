import PropTypes from "prop-types";
import { SearchIcon } from "@heroicons/react/outline";

export default function SearchFrom() {
  return (
    <form className="flex flex-wrap items-center">
      <div className="w-4/12 px-1">
        <select>
          <option>All Category</option>
          <option>Dairy Products</option>
          <option>Chocolate</option>
        </select>
      </div>
      <div className="w-6/12 px-1 flex-grow">
        <input type="text" placeholder="Search the Products, Category..." />
      </div>
      <div className="px-1">
        <button className="border border-emerald-600 border-emerald-600 bg-emerald-600 rounded-lg p-3 text-white transition hover:bg-transparent hover:text-emerald-600 ">
          <SearchIcon className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}

SearchFrom.propTypes = {};
