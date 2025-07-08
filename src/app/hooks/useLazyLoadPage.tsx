import { useState, useEffect } from "react";

interface Props {
  total: number;
  step?: number;
  offset?: number;
}

export function useLazyLoadPage({ total, step = 1, offset = 100 }: Props) {
  const [count, setCount] = useState(step);

  useEffect(() => {
    function onScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - offset
      ) {
        setCount((prev) => Math.min(prev + step, total));
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [step, total, offset]);

  return count;
}
