"use client";

import Link from "next/link";

import { Menu } from "@/lib/types";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden"
      >
        <MenuIcon className="h-4" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="p-4">
          {menu.length ? (
            <ul className="flex w-full flex-col">
              {menu.map((item: Menu) => (
                <li
                  className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                  key={item.title}
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </SheetContent>
    </Sheet>
  );
}
