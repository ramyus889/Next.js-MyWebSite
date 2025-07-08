"use client";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/pages/About" },
  { label: "Contact", href: "/pages/Contact" },
];

export const Header = () => {
  const router = usePathname();
  return (
    <div className="flex justify-center ">
      <div className="fixed top-0 pt-3 max-w-100 w-full px-2 z-1000">
        <div className="border-2 rounded-full h-13 flex justify-between bg-black px-2 items-center gap-5">
          <Link href="/">
            <img
              src="/frontend.jpg"
              alt=""
              className="w-10 h-10 rounded-full border-2 border-gray-300"
            />
          </Link>

          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                router === item.href ? "text-white font-bold" : "text-gray-400"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://github.com/ramyus889/Next.js-MyWebSite"
            target="_blank"
          >
            <BsGithub size={38} />
          </Link>
        </div>
      </div>
    </div>
  );
};
