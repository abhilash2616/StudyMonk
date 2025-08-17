"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Interfaces define karte hain
interface SubLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href?: string; // optional, kyunki kuch links ke paas subLinks ho sakte hain
  subLinks?: SubLink[];
}

// Links array ko type-safe banate hain
const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  {
    label: "The Cambridge Pathway",
    subLinks: [
      { label: "Cambridge Primary", href: "/the-cambridge-pathway/cambridge-primary" },
      { label: "Cambridge Secondary", href: "/the-cambridge-pathway/cambridge-secondary" },
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

function Nav(): React.JSX.Element {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {links.map((item, i) => (
          <NavigationMenuItem key={i}>
            {item.subLinks ? (
              <>
                <NavigationMenuTrigger className="text-black text-[16px]">
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-50">
                  <ul className="grid gap-2 p-3 w-[220px]">
                    {item.subLinks.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={sub.href}
                            className="block rounded-md px-3 py-2 text-[16px] text-black hover:bg-gray-100 hover:text-[#001F3F]"
                          >
                            {sub.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href!} // "!" ka matlab TypeScript ko batana ki value exist karegi
                  className={`${navigationMenuTriggerStyle()} text-black text-[16px]`}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Nav;
