"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import { Menu } from "@/lib/types";
import { MenuIcon, XIcon } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
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
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden"
      >
        <MenuIcon className="h-4" />
      </button>
      <Dialog onOpenChange={closeMobileMenu}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <DialogContent className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
          <div className="p-4">
            <button
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <XIcon className="h-6" />
            </button>

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
        </DialogContent>
      </Dialog>
    </>
  );
}
