import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MobileAccordion({ label, items = [] }) {
    const [open, setOpen] = useState(false);
  
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center py-4 font-semibold border-b"
        >
          {label}
          <ChevronDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
  
        <div
          className={`
            overflow-hidden transition-all duration-300
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="py-2 pl-2 space-y-2 text-gray-600">
            {items?.map((it) => (
              <div key={it}>{it}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  