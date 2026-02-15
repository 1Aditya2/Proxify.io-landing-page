import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function CustomSelect({
  options = [],
  value,
  onChange,
  label = "",
  labelParentClassName = "",
  dropDownClassName = ''
}) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("bottom");
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!containerRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useLayoutEffect(() => {
    if (!open) return;

    const triggerRect =
      containerRef.current?.getBoundingClientRect();
    const dropdownHeight =
      dropdownRef.current?.offsetHeight || 0;

    const spaceBelow =
      window.innerHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;

    if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
      setPosition("top");
    } else {
      setPosition("bottom");
    }
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <div
        ref={dropdownRef}
        className={`
          absolute z-[9999]
          bg-white rounded-2xl shadow-xl border border-gray-200
          transition-all duration-200 ease-in-out ${dropDownClassName}
          ${position === "bottom"
            ? "top-full mt-2"
            : "bottom-full mb-2"}
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <ul className="py-2">
          {options.map((option) => {
            const isActive = option === value;

            return (
              <li
                key={option}
                onClick={() => {
                  onChange?.(option);
                  setOpen(false);
                }}
                className={`
                  flex items-center justify-between
                  px-6 py-4 cursor-pointer
                  ${isActive
                    ? "bg-purple-100"
                    : "hover:bg-gray-100"}
                `}
              >
               <span>{option}</span>
                {isActive && (
                  <Check
                    className="text-primary-600"
                    size={18}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        onClick={() => setOpen((p) => !p)}
        className={`flex items-center justify-between ${labelParentClassName}`}
      >
        {value}
        {label ? (
          label
        ) : (
          <ChevronDown
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </button>
    </div>
  );
}
