"use client";

import Link from "next/link";
import { JSX, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { m, motion } from "motion/react";
import { useResizeWindow } from "./types/useResizeWindow";

interface Language {
  id: number;
  link: string;
  language: string;
  colSpan: string;
  icon: JSX.Element;
}

interface CardProps {
  src: string;
  date: string;
  link: string;
  title: string;
  gitLink: string;
  heightDef: string;
  heightMob: string;
  itemContent: Language[];
}

export const Card = ({
  src,
  link,
  date,
  title,
  gitLink,
  heightDef,
  heightMob,
  itemContent,
}: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const resizeStatus = useResizeWindow();

  const height = isOpen ? (resizeStatus.sm ? heightMob : heightDef) : "220px";

  return (
    <div className="w-full">
      <motion.div
        animate={{
          height: height,
        }}
        transition={{ duration: 0.3 }}
        className=" border-2 rounded-2xl p-4 overflow-hidden"
      >
        <div className="flex justify-between items-start gap-5">
          <div className="inline-flex gap-2 items-start">
            <Link href={link} target="_blank" className="">
              <img
                src={src}
                alt=""
                className="w-30 h-30 object-cover border-2 p-1 rounded-2xl border-gray-300"
              />
            </Link>
            <div className="flex flex-col gap-1">
              <div className="text-2xl pt-2">{title}</div>
              <div className="text-[13px]">{date}</div>
              <div className="flex sm:hidden gap-3 items-center">
                <Link href={gitLink} target="_blank">
                  <BsGithub size={38} />
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:flex hidden flex-col gap-3 items-center">
            <Link href={gitLink} target="_blank">
              <BsGithub size={38} />
            </Link>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border-2 border-blue-500 text-white py-2 min-[480px]:w-45 w-full rounded"
          >
            {isOpen ? "Скрыть детали" : "Показать детали"}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: isOpen ? 0.1 : 0 }}
            className="mt-4"
          >
            <h3 className="text-lg font-semibold mb-2">
              Использованные Технологии:
            </h3>
            <ul className=" grid min-[480px]:grid-cols-3 grid-cols-2 sm:gap-4 gap-3">
              {itemContent.map((item) => (
                <li key={item.id} className={item.colSpan}>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex items-center gap-2 border-2 justify-center rounded-lg w-full"
                  >
                    {item.icon}
                    {item.language}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
