"use client";
import { useEffect, useState } from "react";

export function useResize(breakpoint = 520) {
  const [isResized, setIsResized] = useState(false);

  useEffect(() => {
    const checkResize = () => setIsResized(window.innerWidth < breakpoint);

    checkResize();

    window.addEventListener("resize", checkResize);
    return () => window.removeEventListener("resize", checkResize);
  }, [breakpoint]);

  return isResized;
}
