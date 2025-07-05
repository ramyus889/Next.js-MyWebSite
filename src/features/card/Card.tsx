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
  link: string;
  title: string;
  gitLink: string;
  itemContent: Language[];
}

export const Card = ({ title, link, src, gitLink, itemContent }: CardProps) => {
  return (
    <div className="w-full">
      <div className=" border-2 rounded-2xl p-4 ">
        <div className="">
          <div className="flex flex-col sm:flex-row sm:justify-between justify-center sm:items-start items-center gap-5">
            <Link href={link} target="_blank" className="inline-block">
              <img
                src={src}
                alt=""
                className="w-30 h-30 object-cover border-2 p-1 rounded-full"
              />
            </Link>
            <div className="flex flex-wrap sm:justify-end justify-center gap-2">
              {itemContent.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  target="_blank"
                  className="border border-gray-300 rounded-full px-2 py-0.4 gap-1 text-[15px] flex items-center"
                >
                  <div className="">{item.icon}</div>
                  <div className="">{item.language}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div className="pt-5 flex items-center justify-between w-full">
              <div className="text-2xl">{title}</div>
              <div className="flex gap-3 items-center">
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
        </div>
      </div>
    </div>
  );
};
