import { useEffect, useState } from "react";

export function useResizeWindow() {
  const [resizeStatus, setResizeStatus] = useState({
    sm: false,
  });

  useEffect(() => {
    const checkResize = () => {
      setResizeStatus({
        sm: window.innerWidth < 481,
      });
    };

    checkResize();
    window.addEventListener("resize", checkResize);
    return () => window.removeEventListener("resize", checkResize);
  }, []);

  return resizeStatus;
}
