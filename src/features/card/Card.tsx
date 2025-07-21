"use client";

import Link from "next/link";
import { JSX, useEffect, useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

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
  itemContent: Language[];
}

export const Card = ({
  src,
  link,
  date,
  title,
  gitLink,
  itemContent,
}: CardProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className="border-2 border-gray-400 rounded-xl p-1 flex flex-col h-full">
      <div className="h-[200px]">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover rounded-t-xl shadow-md shadow-gray-900"
        />
      </div>
      <div className="mt-5 p-2 flex flex-col gap-4 flex-grow">
        <h3 className="text-lg font-semibold">{title}</h3>

        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          className="flex gap-2 mt-5 overflow-x-auto scrollbar-thin scrollHidden scrollbar-thumb-gray-400 scrollbar-track-gray-200 cursor-grab"
          style={{ userSelect: isDragging ? "none" : "auto" }}
        >
          {itemContent.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="flex items-center border-2 border-gray-400 px-3 rounded-lg justify-center flex-shrink-0"
              style={{ minWidth: "80px" }}
            >
              {item.icon}
              <span className="ml-1 text-[13px]">{item.language}</span>
            </Link>
          ))}
        </div>
        <div className="mt-auto flex gap-3 pt-4">
          <Link
            href={link}
            target="_blank"
            className="flex items-center border-2 border-gray-400 w-full py-1 rounded-lg justify-center"
          >
            <FiExternalLink className="mr-1" />
            <span className="text-sm">{"Демо"}</span>
          </Link>
          <Link
            href={gitLink}
            target="_blank"
            className="flex items-center border-2 border-gray-400 w-full py-1 rounded-lg justify-center"
          >
            <BsGithub className="mr-1" />
            <span className="text-sm">{"Код"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
