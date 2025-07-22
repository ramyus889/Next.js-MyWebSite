"use client";

import React from "react";
import { Profile } from "./ui/Profile";
import { useLazyLoadPage } from "../../hooks/useLazyLoadPage";

const componentsList = [Profile];

export default function Home() {
  const count = useLazyLoadPage({
    total: componentsList.length,
    step: 2,
    offset: 100,
  });

  return (
    <div>
      {componentsList.slice(0, count).map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
}
