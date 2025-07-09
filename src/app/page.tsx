"use client";

import React from "react";
import { Main } from "./components";
import { useLazyLoadPage } from "./hooks/useLazyLoadPage";

const componentsList = [Main];

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

{
  /*
   ! скопировать вид у MywebSite-Vue
  */
}
