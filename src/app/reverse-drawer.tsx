"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  ButtonHTMLAttributes,
  createContext,
  useContext,
  useState,
} from "react";

const reverseDrawerVariants = {
  open: {
    x: "calc(100% - 10vw)",
    borderRadius: "15px",
    scale: 0.98,
  },
  closed: {
    x: "0px",
    borderRadius: "0px",
    scale: 1,
  },
};

const ReverseDrawerRoot = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useReverseDrawer();
  return (
    <motion.div
      style={{
        gridArea: "1/1",
        overflow: `${isOpen ? "hidden" : "auto"}`,
      }}
      animate={isOpen ? "open" : "closed"}
      variants={reverseDrawerVariants}
      transition={{ duration: 0.8, type: "spring", bounce: 0 }}
      className="group flex flex-col min-h-screen w-full bg-white shadow-lg relative"
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ReverseDrawerTrigger = (
  props: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">
) => {
  const { isOpen, setIsOpen } = useReverseDrawer();
  return <button onClick={() => setIsOpen(!isOpen)} {...props} />;
};

const reverseDrawerContext = createContext<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

const ReverseDrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <reverseDrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </reverseDrawerContext.Provider>
  );
};

const useReverseDrawer = () => {
  const context = useContext(reverseDrawerContext);
  if (!context) {
    throw new Error(
      "useReverseDrawer must be used within a ReverseDrawerProvider"
    );
  }
  return context;
};

export {
  ReverseDrawerRoot,
  ReverseDrawerTrigger,
  useReverseDrawer,
  ReverseDrawerProvider,
};
