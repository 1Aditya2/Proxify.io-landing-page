import * as AccordionPrimitive from "@radix-ui/react-accordion";

export function AccordionItem({ value, header, children, parentClassName = '', headerClassName, contentClassName = '' }) {
  return (
    <AccordionPrimitive.Item
      value={value}
      className={`${parentClassName}`}
    >
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger
          className={`
            group flex w-full items-center justify-between
            cursor-pointer ${headerClassName}
          `}
        >
          {header}

        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>

      <AccordionPrimitive.Content
        className={`
          overflow-hidden
          data-[state=closed]:animate-accordion-up
          data-[state=open]:animate-accordion-down ${contentClassName}
        `}
      >
        {children}
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}
