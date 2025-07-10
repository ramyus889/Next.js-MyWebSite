"use client";

import React, { useEffect } from "react";
import { Main } from "./components";
import { useLazyLoadPage } from "./hooks/useLazyLoadPage";
import aos from "aos";
import "aos/dist/aos.css";

const componentsList = [Main];

export default function Home() {
  const count = useLazyLoadPage({
    total: componentsList.length,
    step: 2,
    offset: 100,
  });
  useEffect(() => {
    aos.init({
      duration: 800,
    });
  }, []);

  return (
    <div>
      {componentsList.slice(0, count).map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
}
