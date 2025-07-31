"use client";

import { BsGithub } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { DiTrello } from "react-icons/di";
import { AiOutlineHome } from "react-icons/ai";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { routes } from "@/shared/routes";

const items = [
  { id: "1", icon: <AiOutlineHome size={30} />, href: routes.home, target: "" },
  { id: "2", icon: <DiTrello size={30} />, href: routes.level, target: "" },
  {
    id: "3",
    icon: <IoMdContact size={30} />,
    href: routes.contact,
    target: "",
  },
];

const itemsLink = [
  {
    id: "1",
    icon: <img src="/hhLogo.png" className="w-[30px] h-[30px]" alt="" />,
    href: "https://hh.ru/resume/97ffa530ff0f33a4460039ed1f526f7a4e5936",
    target: "_blank",
  },
  {
    id: "2",
    icon: <BsGithub size={30} className="text-white" />,
    href: "https://github.com/ramyus889",
    target: "_blank",
  },
];

export const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const router = usePathname();
  return (
    <div
      className={cn(
        "fixed top-0 -right-62 pt-5 max-w-80 w-full ps-2 z-1000 transition-all duration-300 ease-in-out",
        isClick && "-right-1"
      )}
    >
      <div className="border-2 border-r-0 rounded-l-full h-13 flex  bg-black ps-[6px]  items-center gap-3">
        <button onClick={() => setIsClick(!isClick)} className="">
          <img
            src="/frontend.jpg"
            alt="frontend"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
        </button>
        <div className="flex items-center gap-4 ml-[4px] mr-[1px]">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target={item.target}
              className={cn(
                router === item.href ? "text-white font-bold" : "text-gray-400"
              )}
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <div className="w-[2px] h-12 bg-gray-300"></div>
        <div className="flex items-center gap-4 ml-[5px]">
          {itemsLink.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target={item.target}
              className={cn(
                router === item.href ? "text-white font-bold" : "text-gray-400"
              )}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
