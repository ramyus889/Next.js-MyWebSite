"use client";

import React from "react";
import { Main, Footer, Banner } from "./components";
import { useLazyLoadPage } from "./hooks/useLazyLoadPage";

const componentsList = [
  Main,
  Banner,
  Footer,
  Main,
  Banner,
  Footer,
  Main,
  Banner,
  Footer,
];

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
   ! нужно добавить в IconText, Card - данные - Scss, GitHub, GitLab, Vercel, Motion, JS
   ? перенести 75% ширины header направо position: absolute;
   ! скопировать вид у MywebSite-Vue
  */
}
