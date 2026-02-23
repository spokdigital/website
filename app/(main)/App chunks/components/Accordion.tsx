import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
 
// Define a context type
interface AccordionContextType {
  isActive: boolean;
  value: string;
  onChangeIndex: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined
);

const useAccordion = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an Accordion component");
  }
  return context;
};

interface AccordionContainerProps {
  children: ReactNode;
  className?: string;
}

export function AccordionContainer({
  children,
  className,
}: AccordionContainerProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-1", className)}>{children}</div>
  );
}

interface AccordionWrapperProps {
  children: ReactNode;
}

export function AccordionWrapper({ children }: AccordionWrapperProps) {
  return <div>{children}</div>;
}

interface AccordionProps {
  children: ReactNode;
  multiple?: boolean;
  defaultValue?: string | string[];
}

export function Accordion({
  children,
  multiple,
  defaultValue,
}: AccordionProps) {
  const [activeIndex, setActiveIndex] = React.useState<
    string | string[] | null
  >(multiple ? defaultValue || [] : defaultValue || null);

  function onChangeIndex(value: string) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return value === currentActiveIndex ? null : value;
      }

      if (Array.isArray(currentActiveIndex)) {
        if (currentActiveIndex.includes(value)) {
          return currentActiveIndex.filter((i) => i !== value);
        } else {
          return [...currentActiveIndex, value];
        }
      }
      return [value];
    });
  }

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const value = child.props.value;
      const isActive = multiple
        ? Array.isArray(activeIndex) && activeIndex.includes(value)
        : activeIndex === value;

      return (
        <AccordionContext.Provider value={{ isActive, value, onChangeIndex }}>
          {child}
        </AccordionContext.Provider>
      );
    }
    return null;
  });
}

interface AccordionItemProps {
  children: ReactNode;
  value: string;
}

export function AccordionItem({ children }: AccordionItemProps) {
  const { isActive } = useAccordion();

  return (
    <div
      className={` border-slate-600/40 overflow-hidden ${
        isActive ? "active bg-transparent" : "bg-transparent"
      }`}
    >
      {children}
    </div>
  );
}

interface AccordionHeaderProps {
  children: ReactNode;

  icon?: ReactNode;

  className?: string;
}

export function AccordionHeader({
  children,
  icon,
  className,
}: AccordionHeaderProps) {
  const { isActive, value, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`py-5 px-2 cursor-pointer ${className} transition-all rounded-lg text-xl font-semibold  flex justify-between items-center ${
        isActive ? "active text-slate-200" : "bg-transparent text-slate-50"
      }`}
      onClick={() => onChangeIndex(value)}
    >
      {children}
      {icon ? (
        <div
          className={`${
            isActive
              ? "rotate-45 bg-[#363842] text-[#94959D]"
              : "rotate-0 bg-[#5A5A5F] text-[#191A1F]"
          } transition-transform rounded-full`}
        >
          {icon}
        </div>
      ) : (
        <ChevronDown
          className={`${
            isActive ? "rotate-180" : "rotate-0"
          } transition-transform ml-3 `}
        />
      )}
    </motion.div>
  );
}

interface AccordionPanelProps {
  children: ReactNode;
}

export function AccordionPanel({ children }: AccordionPanelProps) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={true}>
      {isActive && (
        <motion.div
          initial={{ height: 0, overflow: "hidden" }}
          animate={{ height: "auto", overflow: "hidden" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          className="bg-transparent"
        >
          <motion.article
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="p-3 bg-transparent text-slate-300"
          >
            {children}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
