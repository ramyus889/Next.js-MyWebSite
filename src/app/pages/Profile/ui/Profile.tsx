import { RotatingText } from "@/shared/ui";
import { TextDate } from "../types/TextDate";

export const Profile = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1400px] w-full border-2 border-gray-300 rounded-xl p-4">
        <div className="flex justify-between gap-3 ">
          <div>
            <div className="flex sm:flex-row flex-col items-start gap-3">
              <div className="md:text-4xl text-2xl font-bold">
                Frontend Разработчик
              </div>

              <RotatingText
                texts={TextDate}
                mainClassName="overflow-hidden text-white w-[175px] md:h-[50px] h-[40px] items-center justify-start rounded-lg"
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

            <div className="text-3xl font-bold">Рамазан Юсупов</div>
          </div>

          <img
            src="/frontend.jpg"
            alt="frontend"
            className="w-50 h-50 rounded-xl border-2 border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};
