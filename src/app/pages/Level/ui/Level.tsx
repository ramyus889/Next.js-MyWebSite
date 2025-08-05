import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import React, { useState } from "react";
import { Slider } from "@/shared/ui";
import { sliderData } from "../types/slyderDate";

export const Level = () => {
  const [openGroupIds, setOpenGroupIds] = useState<Set<number>>(new Set());

  const toggleGroup = (id: number) => {
    setOpenGroupIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">Навыки</h2>

      <ul className="mt-5 flex flex-col gap-4 mb-10">
        {sliderData.map((group) => {
          const isOpen = openGroupIds.has(group.id);

          return (
            <li
              key={group.id}
              data-aos="fade-up"
              data-aos-delay={50 * group.id}
              className="w-full text-left border-2 border-gray-400 rounded-xl"
            >
              <button
                onClick={() => toggleGroup(group.id)}
                className="font-semibold w-full text-left px-4 py-2 flex justify-between items-center"
                aria-expanded={isOpen}
                aria-controls={`group-${group.id}`}
                type="button"
              >
                <span>{group.title}</span>
                {isOpen ? (
                  <BsArrowUpSquare size={20} />
                ) : (
                  <BsArrowDownSquare size={20} />
                )}
              </button>

              <div
                id={`group-${group.id}`}
                className="px-6 overflow-hidden transition-[max-height] duration-700 ease-in-out"
                style={{ maxHeight: isOpen ? "1000px" : "0px" }}
                aria-hidden={!isOpen}
              >
                <ul className="flex flex-col gap-2 py-3">
                  {group.list.map((item) => (
                    <li key={item.id}>
                      <Slider
                        value={item.value}
                        label={item.label}
                        delay={item.delay}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
