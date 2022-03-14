import PropTypes from "prop-types";
import { SearchIcon } from "@heroicons/react/outline";
import Input from "../../components/input/index";
import { SELECT, INPUT } from "../../contants/index";

const options = [
  {
    label: "All Category",
    value: "all-category",
  },
  {
    label: "Dairy Products",
    value: "dairy-products",
  },
  {
    label: "Bakery",
    value: "bakery",
  },
];

export default function SearchFrom() {
  return (
    <form className="flex flex-wrap items-center">
      <Input classes="w-4/12 px-1" elementType={SELECT} options={options} />
      <Input
        classes="w-6/12 px-1 flex-grow"
        elementType={INPUT}
        type="text"
        placeholder="Search the Products, Category..."
      />
      <div className="px-1">
        <button className="border-2 border-emerald-600 border-emerald-600 bg-emerald-600 rounded-lg p-3 text-white transition hover:bg-transparent hover:text-emerald-600 ">
          <SearchIcon className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}

SearchFrom.propTypes = {};
