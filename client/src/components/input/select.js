import { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/outline";

export default function Select({ options }) {
  const [selectedValue, setSelectedValue] = useState(options[0].label);
  const [query, setQuery] = useState("");

  const filteredValue =
    query === ""
      ? options
      : options.filter(({ label }) =>
          label.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="relative">
      <Combobox value={selectedValue} onChange={setSelectedValue}>
        <div className="relative">
          <Combobox.Input
            className="pr-6"
            onChange={({ target }) => setQuery(target.value)}
          />
          <Combobox.Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <SelectorIcon className="w-4 h-4" />
          </Combobox.Button>
        </div>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Combobox.Options className="absolute transform translate-y-1 rounded-lg border-2 drop-shadow-md border-slate-400 py-2 w-full bg-white top-full">
            {filteredValue.map(({ label }) => (
              <Combobox.Option
                className="cursor-pointer py-1.5 px-3"
                key={label}
                value={label}
              >
                {label}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
}
