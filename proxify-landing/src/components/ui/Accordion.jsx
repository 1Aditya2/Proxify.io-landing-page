import * as AccordionPrimitive from "@radix-ui/react-accordion";

export default function Accordion({
  children,
  type = "single",
  defaultValue,
  className = ''
}) {
  return (
    <AccordionPrimitive.Root
      type={type}
      defaultValue={defaultValue}
      collapsible
      className={`w-full ${className}`}
    >
      {children}
    </AccordionPrimitive.Root>
  );
}
