import { MainText } from "./ui/MainText";
import { Card } from "./../../features/card/Card";
import { ItemDate } from "@/features/card/types/itemDate";

export const Main = () => {
  return (
    <div>
      <MainText />
      <div className="grid grid-cols-1 min-[950px]:grid-cols-2 min-[1750px]:grid-cols-3 gap-4 my-10">
        {ItemDate.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            link={item.link}
            src={item.src}
            gitLink={item.gitLink}
            itemContent={item.languageContent}
          />
        ))}
      </div>
    </div>
  );
};
