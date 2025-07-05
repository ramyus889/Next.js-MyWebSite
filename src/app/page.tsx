import { Card } from "../features";
import React from "react";
import { ItemDate } from "@/features/card/types/itemDate";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center sm:mx-[clamp(0.5rem,7vw,10rem)] mx-2">
        <div className="grid grid-cols-1 min-[1240px]:grid-cols-2 min-[1740px]:grid-cols-3 w-full gap-6">
          {ItemDate.map((item) => (
            <Card
              key={item.id}
              src={item.src}
              link={item.link}
              date={item.date}
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
