import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IconText, RotatingText } from "@/shared/ui";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

const texts = [
  <IconText
    key="react"
    text="React.js"
    href="https://react.dev/"
    icon={<DiReact color="#61DAFB" size={30} />}
  />,
  <IconText
    key="next"
    text="Next.js"
    href="https://nextjs.org/"
    icon={<TbBrandNextjs color="#000000" size={30} />}
  />,
  <IconText
    key="typescript"
    text="TypeScript"
    href="https://www.typescriptlang.org/"
    icon={<SiTypescript color="#007ACC" size={30} />}
  />,
  <IconText
    key="tailwind"
    text="TailwindCSS"
    href="https://tailwindcss.com/"
    icon={<SiTailwindcss color="#06B6D4" size={30} />}
  />,
];

export const MainText = () => {
  return (
    <div className="flex sm:flex-row flex-col sm:items-center items-start gap-3 ">
      <div className="md:text-4xl text-2xl font-bold">Frontend Разработчик</div>
      <RotatingText
        texts={texts}
        mainClassName="bg-white overflow-hidden w-[180px] md:h-[50px] h-[40px] items-center justify-center rounded-lg"
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
  );
};
