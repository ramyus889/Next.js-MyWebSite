import { RotatingText } from "@/shared/ui";
import Link from "next/link";
import React, { JSX } from "react";
import { BsGithub } from "react-icons/bs";
import { TextDate } from "./types/itemDate";

interface Language {
  id: number;
  language: string;
  icon: JSX.Element;
  link: string;
}

interface CardProps {
  src: string;
  date: string;
  link: string;
  title: string;
  gitLink: string;
  itemContent: Language[];
}

export const Card = ({
  title,
  link,
  src,
  gitLink,
  itemContent,
  date,
}: CardProps) => {
  return (
    <div className="w-full">
      <div className=" border-2 rounded-2xl p-4 ">
        <div className="">
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
            <RotatingText
              texts={TextDate}
              mainClassName="border-2 overflow-hidden  w-[180px] md:h-[50px] h-[40px] items-center justify-center rounded-2xl"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
