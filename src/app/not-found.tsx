"use client";
import { FuzzyText } from "@/shared/ui";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isResized, setIsResized] = useState(false);

  useEffect(() => {
    const checkResize = () => setIsResized(window.innerWidth < 520);

    checkResize();

    window.addEventListener("resize", checkResize);
    return () => window.removeEventListener("resize", checkResize);
  }, []);
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
