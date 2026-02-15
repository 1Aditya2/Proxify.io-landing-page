import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Button({
  children,
  variant = "primary",
  className,
  showArrow = false,
  ...props
}) {
    const [isHovered, setIsHovered] = useState(false);
  const baseStyles =
    "group rounded-[30px] px-4 py-2 border transition-all duration-150 ease-in-out";

  const variants = {
    primary:
      "bg-primary border-primary hover:bg-purple-200 hover:border-purple-200 text-white",

    secondary:
      "bg-white text-black hover:bg-purple-200",

    terinary: 'bg-black text-white hover:bg-purple-200 hover:text-black',
    outlineWhite: 'border-2 border-white bg-transparent hover:bg-white text-white hover:text-black',
    outlineBlack: 'border-2 border-black bg-white hover:bg-black text-black hover:text-white'
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className, 'flex items-center whitespace-nowrap')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span>
        {children}
      </span>
      {showArrow && isHovered && (
        <ArrowRight
          size={18}
          className="transition-all duration-300 ease-in-out scale-75"
        />
      )}
    </button>
  );
}
