"use client";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { createContext, useContext, useState } from "react";

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

const ReverseDrawerRoot = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isOpen, setIsOpen } = useReverseDrawer();

  return (
    <MotionConfig transition={{ duration: 0.8, type: "spring", bounce: 0 }}>
      <Dialog.Root modal open={isOpen} onOpenChange={setIsOpen}>
        <motion.div
          className={cn(
            "w-full min-h-screen flex flex-col z-40 relative bg-white",
            className
          )}
          animate={isOpen ? "open" : "closed"}
          variants={reverseDrawerVariants}
          style={{
            gridArea: "1/1",
            overflow: `${isOpen ? "hidden" : "auto"}`,
          }}
        >
          {children}
          <Dialog.Overlay asChild forceMount>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`absolute inset-0 bg-black/50 z-20`}
                />
              )}
            </AnimatePresence>
          </Dialog.Overlay>
        </motion.div>
      </Dialog.Root>
    </MotionConfig>
  );
};

const ReverseDrawerContent = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const { isOpen } = useReverseDrawer();
  return (
    <MotionConfig transition={{ duration: 0.8, type: "spring", bounce: 0 }}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`absolute inset-0 bg-black/90 z-20`}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className={cn(
                  `group flex flex-col bg-white shadow-lg fixed top-4 bottom-4 left-4 right-10 z-30 after:content-[''] after:absolute after:left-full after:pointer-events-none after:top-0 after:bottom-0 after:w-10 after:bg-white after:z-10`,
                  className
                )}
              >
                {children}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

const ReverseDrawerTrigger = Dialog.Trigger;

const ReverseDrawerClose = Dialog.Close;

const reverseDrawerContext = createContext<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

const useReverseDrawer = () => {
  const context = useContext(reverseDrawerContext);
  if (!context) {
    throw new Error("useReverseDrawer must be used within a ReverseDrawerRoot");
  }
  return context;
};

const ReverseDrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <reverseDrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </reverseDrawerContext.Provider>
  );
};

export {
  ReverseDrawerClose,
  ReverseDrawerContent,
  ReverseDrawerProvider,
  ReverseDrawerRoot,
  ReverseDrawerTrigger,
  useReverseDrawer,
};
