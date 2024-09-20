import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/spinner.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReverseDrawerRoot, ReverseDrawerTrigger } from "./reverse-drawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rico's Next.js Template",
  description: "TailwindCSS, tRPC, Zod, React Query, Framer Motion, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "grid min-h-screen w-full overflow-x-hidden"
        )}
      >
        <Providers>
          <ReverseDrawerTrigger
            style={{ gridArea: "1/1" }}
            className="flex md:hidden flex-col min-h-screen w-full bg-gray-950 p-2"
          >
            <div className="bg-white rounded-md h-full w-full flex flex-col items-start p-3">
              Toggle
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/user/1">User 1</Link>
                </li>
                <li>
                  <Link href="/user/2">User 2</Link>
                </li>
              </ul>
            </div>
          </ReverseDrawerTrigger>
          <ReverseDrawerRoot>
            <nav className="sticky top-0 w-full bg-neutral-300">
              <div className="py-4 px-8 flex justify-between gap-2 max-w-screen-lg mx-auto">
                <p className="hidden md:block">Nav</p>
                <ReverseDrawerTrigger className="block md:hidden">
                  Toggle
                </ReverseDrawerTrigger>
                <ul className="gap-2 items-center hidden md:flex">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/user/1">User 1</Link>
                  </li>
                  <li>
                    <Link href="/user/2">User 2</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <main className="flex grow flex-col items-center justify-center">
              {children}
            </main>
            <footer className="w-full bg-neutral-300">
              <div className="w-full py-4 px-8 flex gap-2 justify-between max-w-screen-lg mx-auto">
                Footer
              </div>
            </footer>
          </ReverseDrawerRoot>
        </Providers>
      </body>
    </html>
  );
}
