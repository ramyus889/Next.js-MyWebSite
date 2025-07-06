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
      {isResized ? (
        <>
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
            fontSize={130}
          >
            404
          </FuzzyText>
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
            fontSize={45}
          >
            Not Found
          </FuzzyText>
        </>
      ) : (
        <>
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
            fontSize={200}
          >
            404
          </FuzzyText>
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
            fontSize={75}
          >
            Not Found
          </FuzzyText>
        </>
      )}
    </div>
  );
}
