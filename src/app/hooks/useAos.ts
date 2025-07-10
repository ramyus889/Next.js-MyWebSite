import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export function useAos(options = { duration: 800 }) {
  useEffect(() => {
    aos.init(options);
  }, [options]);
}
