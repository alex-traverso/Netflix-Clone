"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

const links = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Tv Shows",
    href: "/home/shows",
  },
  {
    name: "Movies",
    href: "/home/movies",
  },
  {
    name: "Recently Added",
    href: "/home/recently",
  },
  {
    name: "My List",
    href: "/home/user/list",
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="w-full items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32 ">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, id) => (
            <div key={id}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline text-base cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.href}
                    className="text-gray-300 font-normal text-base transition-all hover:text-white cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-6 h-6 text-gray-300 cursor-pointer" />
        <Bell className="w-6 h-6 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
}
