import { ChevronDown } from "lucide-react";

export default function Dropdown({ label, items = [], flag }) {
  return (
    <div className="relative group inline-block w-full whitespace-nowrap">
      <button className={`hover:text-purple-200 flex w-full items-center justify-between transition-colors duration-200 ${flag ? 'text-white' : 'text-black'}`}>
        <span>{label}</span>
          <ChevronDown
            size={22}
            className="
      transition-transform duration-200 ease-in-out
      group-hover:rotate-180"
          />
      </button>
      <div
        className="
            absolute left-0 top-12 z-[999999]
            w-56 rounded-xl bg-white shadow-lg
            opacity-0 invisible translate-y-2
            transition-all duration-200 ease-in-out
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
          "
      >
        <ul className="py-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
