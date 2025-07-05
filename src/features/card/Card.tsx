import Link from "next/link";
import React, { JSX } from "react";
import { BsGithub } from "react-icons/bs";

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

                  <img
                    src="/frontend.jpg"
                    alt=""
                    className="w-10 h-10 border-2 rounded-full border-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="sm:flex hidden flex-col gap-3 items-center">
              <Link href={gitLink} target="_blank">
                <BsGithub size={38} />
              </Link>

              <img
                src="/frontend.jpg"
                alt=""
                className="w-10 h-10 border-2 rounded-full border-gray-300"
              />
            </div>
          </div>

          <div className="flex flex-wrap sm:justify-end justify-center gap-2 mt-3">
            {itemContent.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                target="_blank"
                className="border border-gray-300 rounded-full px-2 py-0.5 gap-1 text-[13px] flex items-center"
              >
                <div className="">{item.icon}</div>
                <div className="pt-0.5">{item.language}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
