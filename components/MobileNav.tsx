"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa6";

interface SubLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href?: string;
  subLinks?: SubLink[];
}

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  {
    label: "The Cambridge Pathway",
    subLinks: [
      { label: "Early Years", href: "/the-cambridge-pathway/early-years" },
      { label: "Primary", href: "/the-cambridge-pathway/primary" },
    ],
  },
  { label: "Our Mentors", href: "/our-mentors" },
  {
    label: "Resource Hub",
    subLinks: [
      { label: "Events", href: "/resource-hub/events" },
      { label: "Gallery", href: "/resource-hub/gallery" },
    ],
  },
  { label: "Plans & Pricing", href: "/plan-and-pricing" },
];

function MobileNav(): React.JSX.Element {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    label: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDropdown(label);
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition">
        <CiMenuFries className="text-2xl text-[#001F3F]" />
      </SheetTrigger>

      <SheetContent
        ref={sheetRef}
        className="flex flex-col px-6 py-8"
        aria-describedby={undefined}
      >
        <SheetTitle className="sr-only">Main Menu</SheetTitle>
        <nav className="flex flex-col gap-4 text-lg font-medium" role="menu">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href ?? "");

            if (link.subLinks) {
              const isOpen = openDropdown === link.label;

              return (
                <div key={link.label}>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between px-2 py-1 rounded-md cursor-pointer transition-colors ${
                      isActive ? "text-[#001F3F]" : "text-black hover:text-[#001F3F]"
                    } focus:outline-none focus:ring-2 focus:ring-[#001F3F]`}
                    aria-expanded={isOpen}
                    aria-controls={`${link.label.replace(/\s+/g, "-").toLowerCase()}-submenu`}
                    onClick={() => toggleDropdown(link.label)}
                    onKeyDown={(e) => handleKeyDown(e, link.label)}
                  >
                    <span>{link.label}</span>
                    {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                  </button>
                  {isOpen && (
                    <div
                      id={`${link.label.replace(/\s+/g, "-").toLowerCase()}-submenu`}
                      className="ml-4 mt-1 flex flex-col gap-2"
                      role="menu"
                      aria-label={`${link.label} submenu`}
                    >
                      {link.subLinks.map((subLink) => {
                        const isSubActive = pathname.startsWith(subLink.href);
                        return (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className={`text-sm px-2 py-1 rounded-md transition-colors ${
                              isSubActive
                                ? "text-[#001F3F] underline underline-offset-4"
                                : "text-gray-700 hover:text-[#001F3F]"
                            }`}
                            role="menuitem"
                          >
                            {subLink.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href!}
                className={`px-2 py-1 rounded-md transition-colors capitalize ${
                  isActive
                    ? "text-[#001F3F] underline underline-offset-8 decoration-[1.5px]"
                    : "text-black hover:text-[#001F3F] hover:underline hover:underline-offset-8"
                }`}
                role="menuitem"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
