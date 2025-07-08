import { RotatingText } from "@/shared/ui";
import { TextDate } from "../types/TextDate";

export const MainText = () => {
  return (
    <div className="flex sm:flex-row flex-col  items-start gap-3 ">
      <div className="md:text-4xl text-2xl font-bold">Frontend Разработчик</div>
      <RotatingText
        texts={TextDate}
        mainClassName="overflow-hidden text-white w-[165px] md:h-[50px] h-[40px] items-center justify-center rounded-lg"
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
