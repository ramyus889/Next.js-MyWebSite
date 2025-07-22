"use client";

import { Main } from "./componets/Main";
import { useLazyLoadPage } from "./hooks/useLazyLoadPage";
import { useAos } from "./hooks/useAos";

const componentsList = [Main];

export default function Home() {
  const count = useLazyLoadPage({
    total: componentsList.length,
    step: 2,
    offset: 100,
  });

  useAos({ duration: 800 });

  return (
    <div>
      {componentsList.slice(0, count).map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
}
