import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/spinner.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "flex flex-col min-h-screen w-full")}
      >
        <Providers>
          <nav className="sticky top-0 w-full py-4 px-8 bg-neutral-300">
            Nav
          </nav>
          <main className="flex grow flex-col items-center justify-center">
            {children}
          </main>
          <footer className="w-full py-12 px-8 bg-neutral-300">Footer</footer>
        </Providers>
      </body>
    </html>
  );
}
