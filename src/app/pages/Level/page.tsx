"use client";

import React from "react";
import { Level } from "./ui/Level";
import { useLazyLoadPage } from "../../hooks/useLazyLoadPage";

const componentsList = [Level];

export default function Home() {
  const count = useLazyLoadPage({
    total: componentsList.length,
    step: 2,
    offset: 100,
  });

  return (
    <div>
      <div className="text-4xl text-red-500">About</div>
      {componentsList.slice(0, count).map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
}

