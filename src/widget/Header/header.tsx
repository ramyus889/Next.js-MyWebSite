"use client";

import { IoMdContact } from "react-icons/io";
import { DiTrello } from "react-icons/di";
import { AiOutlineHome } from "react-icons/ai";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";

const items = [
  { id: "1", icon: <AiOutlineHome size={30} />, href: "/" },
  { id: "2", icon: <DiTrello size={30} />, href: "/pages/About" },
  { id: "3", icon: <IoMdContact size={30} />, href: "/pages/Contact" },
];

export const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const router = usePathname();
  return (
    <div
      className={cn(
        "fixed top-0 -right-60 pt-5 max-w-80 w-full ps-2 z-1000 transition-all duration-300 ease-in-out",
        isClick && "-right-1"
      )}
    >
      <div className="border-2 border-r-0 rounded-l-full h-13 flex justify-between bg-black ps-[6px] pe-6 items-center gap-3">
        <button onClick={() => setIsClick(!isClick)} className="">
          <img
            src="/frontend.jpg"
            alt="frontend"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
        </button>

        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              router === item.href ? "text-white font-bold" : "text-gray-400"
            )}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
