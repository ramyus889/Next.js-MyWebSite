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
];
