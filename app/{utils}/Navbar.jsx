"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/About",
    name: "About",
  },
  {
    path: "/Projects",
    name: "Projects",
  },
  {
    path: "/Services",
    name: "Services",
  },
  {
    path: "/Contact",
    name: "Contact",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/";
  
  return (
    <div className="border border-stone-800/90 sm:p-[0.4rem] rounded-lg sm:mb-12 sticky top-0 z-[100] bg-stone-900/80 backdrop-blur-md">
      <nav className="flex sm:gap-2 relative justify-start w-full z-[100]  rounded-lg">
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;

          return (
            <Link
              key={item.path}
              className={`pl-1 sm:px-4 sm:py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-400"
              }`}
              href={item.path}
            >
              <span className="text-[10px] sm:text-[20px] md:[28px]">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}