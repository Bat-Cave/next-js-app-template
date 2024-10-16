"use client";

import { ReverseDrawerTrigger, useReverseDrawer } from "@/app/reverse-drawer";
import Link from "next/link";

export default function MobileDrawerNav() {
  const { isOpen, setIsOpen } = useReverseDrawer();
  return (
    <div
      style={{ gridArea: "1/1" }}
      className="flex md:hidden flex-col min-h-screen w-full bg-gray-950 p-2 group"
      tabIndex={isOpen ? 0 : -1}
      data-state={isOpen ? "open" : "closed"}
    >
      <div className="bg-white rounded-md h-full w-full flex flex-col items-start p-3 group-data-[state='open']:scale-100 group-data-[state='closed']:scale-90 group-data-[state='open']:opacity-100 group-data-[state='closed']:opacity-0 transition-all duration-700">
        <ReverseDrawerTrigger>Toggle</ReverseDrawerTrigger>
        <ul>
          <li>
            <Link
              href="/"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/user/1"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              User 1
            </Link>
          </li>
          <li>
            <Link
              href="/user/2"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              User 2
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
