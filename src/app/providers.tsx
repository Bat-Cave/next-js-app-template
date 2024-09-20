// In Next.js, this file would be called: app/providers.jsx
"use client";

import { TailwindIndicator } from "@/components/dev-tools";
import { TRPCProvider } from "@/server/client";
import { MotionConfig } from "framer-motion";
import { ReverseDrawerProvider } from "./reverse-drawer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.33 }}>
      <TRPCProvider>
        <ReverseDrawerProvider>{children}</ReverseDrawerProvider>
        {/* Dev tools */}
        <TailwindIndicator />
      </TRPCProvider>
    </MotionConfig>
  );
}
