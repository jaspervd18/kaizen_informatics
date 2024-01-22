"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import { Menu } from "@/lib/types";
import { MenuIcon, Sheet, XIcon } from "lucide-react";
import { SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden"
      >
        <MenuIcon className="h-4" />
      </SheetTrigger>
      <SheetContent>
        <div className="p-4">
          {menu.length ? (
            <ul className="flex w-full flex-col">
              {menu.map((item: Menu) => (
                <li
                  className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                  key={item.title}
                >
                  <Link href={item.path} onClick={closeMobileMenu}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </SheetContent>
    </Sheet>
  );
}
