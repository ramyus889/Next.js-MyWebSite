"use client";
import { FuzzyText } from "@/shared/ui";
import { useResize } from "./hooks/useResize";

export default function NotFound() {
  const isResized = useResize(520);
  return (
    <div className="flex flex-col items-center mt-[200px] gap-5 overflow-hidden">
      <>
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          fontSize={isResized ? 130 : 200}
        >
          404
        </FuzzyText>
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          fontSize={isResized ? 45 : 75}
        >
          Not Found
        </FuzzyText>
      </>
    </div>
  );
}
