import { Card } from "@/features/card/Card";
import { ItemDate } from "@/features/card/types/itemDate";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Main = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 min-[950px]:grid-cols-2 min-[1750px]:grid-cols-3 gap-4 my-10">
      {ItemDate.map((item) => (
        <div data-aos="fade-up" data-aos-delay={200 * item.id} key={item.id}>
          <Card
            title={item.title}
            link={item.link}
            src={item.src}
            text={item.text}
            gitLink={item.gitLink}
            itemContent={item.languageContent}
          />
        </div>
      ))}
    </div>
  );
};
