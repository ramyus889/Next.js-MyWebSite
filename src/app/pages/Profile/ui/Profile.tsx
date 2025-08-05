import { RotatingText } from "@/shared/ui";
import { TextDate } from "../types/TextDate";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BarChartLayoutExample } from "@/shared/ui/TremorCharts/ui/Chart";

export const Profile = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div data-aos="fade-up" className="flex justify-center max-sm:py-10">
      <div className="max-w-[1400px] w-full border-2 border-gray-300 rounded-xl p-4">
        <div className="flex flex-col-reverse md:flex-row md:justify-between justify-center items-center gap-3">
          <div>
            <div className="flex flex-col sm:flex-row lg:items-start items-center gap-3">
              <h1 className="lg:text-4xl text-2xl font-bold">
                Frontend Разработчик
              </h1>

              <RotatingText
                texts={TextDate}
                mainClassName="overflow-hidden text-white w-[175px] md:h-[50px] h-[40px] flex items-center sm:justify-start justify-center rounded-lg"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                rotationInterval={2000}
              />
            </div>

            <h2 className="lg:text-3xl text-2xl font-bold max-md:text-center max-sm:pt-5">
              Рамазан Юсупов
            </h2>
          </div>

          <img
            src="/frontend.jpg"
            alt="Фото Рамазана Юсупова"
            loading="lazy"
            className="w-[clamp(100px,20vw,200px)] h-[clamp(100px,20vw,200px)] rounded-xl border-2 border-gray-300"
          />
        </div>

        <div className="mt-10">
          <BarChartLayoutExample />
        </div>
      </div>
    </div>
  );
};
