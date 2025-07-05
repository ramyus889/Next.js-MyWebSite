import { SiTypescript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { Card } from "../features";
import React from "react";

const items = [
  {
    id: 1,
    src: "/31SaaS.png",
    link: "https://31-saa-s.vercel.app/",
    title: "31SaaS",
    gitLink: "https://github.com/ramyus889/31SaaS",
    languageContent: [
      {
        id: 1,
        language: "Next.js",
        link: "https://nextjs.org/",
        icon: <TbBrandNextjs color="#ffffff" size={30} />,
      },
      {
        id: 2,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={30} />,
      },
      {
        id: 3,
        language: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={20} />,
      },
    ],
  },
  {
    id: 2,
    src: "/LessonEng.png",
    link: "https://lesson-english2-two.vercel.app/",
    title: "Lesson English",
    gitLink: "https://github.com/ramyus889/LessonEnglish2",
    languageContent: [
      {
        id: 1,
        language: "Next.js",
        link: "https://nextjs.org/",
        icon: <TbBrandNextjs color="#ffffff" size={30} />,
      },
      {
        id: 2,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={30} />,
      },
      {
        id: 3,
        language: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={20} />,
      },
    ],
  },
  {
    id: 3,
    src: "/mirrorWorld.png",
    link: "https://mirror-world-seven.vercel.app/",
    title: "Mirror World",
    gitLink: "https://github.com/ramyus889/MirrorWorld",
    languageContent: [
      {
        id: 1,
        language: "Next.js",
        link: "https://nextjs.org/",
        icon: <TbBrandNextjs color="#ffffff" size={30} />,
      },
      {
        id: 2,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={30} />,
      },
      {
        id: 3,
        language: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={20} />,
      },
    ],
  },
  {
    id: 4,
    src: "/portfolio.png",
    link: "https://personalwebfrontend.vercel.app/",
    title: "Portfolio",
    gitLink: "https://github.com/ramyus889/portfolio",
    languageContent: [
      {
        id: 1,
        language: "Next.js",
        link: "https://nextjs.org/",
        icon: <TbBrandNextjs color="#ffffff" size={30} />,
      },
      {
        id: 2,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={30} />,
      },
      {
        id: 3,
        language: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={20} />,
      },
    ],
  },
  {
    id: 5,
    src: "/next-pizza.png",
    link: "https://personalwebfrontend.vercel.app/",
    title: "Portfolio",
    gitLink: "https://github.com/ramyus889/portfolio",
    languageContent: [
      {
        id: 1,
        language: "Next.js",
        link: "https://nextjs.org/",
        icon: <TbBrandNextjs color="#ffffff" size={30} />,
      },
      {
        id: 2,
        language: "React.js",
        link: "https://react.dev/",
        icon: <DiReact color="#61DAFB" size={30} />,
      },
      {
        id: 3,
        language: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript color="#007ACC" size={20} />,
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center mx-[clamp(0.5rem,7vw,10rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-6">
          {items.map((item) => (
            <Card
              key={item.id}
              src={item.src}
              link={item.link}
              title={item.title}
              gitLink={item.gitLink}
              itemContent={item.languageContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
