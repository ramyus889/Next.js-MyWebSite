import { SiFramer } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiGitlab } from "react-icons/si";
import { TbBrandSass } from "react-icons/tb";
import { IconText } from "@/shared/ui";
import { DiReact } from "react-icons/di";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const TextDate = [
  <IconText
    key="react"
    text="React.js"
    href="https://react.dev/"
    icon={<DiReact color="#61DAFB" size={35} />}
  />,
  <IconText
    key="next"
    text="Next.js"
    href="https://nextjs.org/"
    icon={<TbBrandNextjs color="#ffffff" size={30} />}
  />,
  <IconText
    key="javascript"
    text="JavaScript"
    href="https://www.javascript.com/"
    icon={<FaJs color="#F7DF1E" size={25} />}
  />,
  <IconText
    key="typescript"
    text="TypeScript"
    href="https://www.typescriptlang.org/"
    icon={<SiTypescript color="#007ACC" size={25} />}
  />,
  <IconText
    key="tailwind"
    text="TailwindCSS"
    href="https://tailwindcss.com/"
    icon={<SiTailwindcss color="#06B6D4" size={30} />}
  />,
  <IconText
    key="sass"
    text="Scss"
    href="https://sass-lang.com/"
    icon={<TbBrandSass color="#CC6699" size={30} />}
  />,
  <IconText
    key="github"
    text="GitHub"
    href="https://github.com/"
    icon={<AiFillGithub color="#ffffff" size={30} />}
  />,
  <IconText
    key="gitlab"
    text="Gitlab"
    href="https://gitlab.com/"
    icon={<SiGitlab color="#CC6699" size={25} />}
  />,
  <IconText
    key="vercel"
    text="Vercel"
    href="https://vercel.com/"
    icon={<SiVercel color="#ffffff" size={25} />}
  />,
  <IconText
    key="framer"
    text="Framer Motion"
    href="https://www.framer.com/docs/"
    icon={<SiFramer color="#ffffff" size={25} />}
  />,
];
