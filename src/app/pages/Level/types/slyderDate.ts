export interface SliderItem {
  id: number;
  value: number;
  label: string;
  delay: number;
}

export interface SliderGroup {
  id: number;
  title: string;
  list: SliderItem[];
}

export const sliderData: SliderGroup[] = [
  {
    id: 1,
    title: "JS/TS",
    list: [
      { id: 1, value: 84, label: "Next.js/React.js", delay: 0.1 },
      { id: 2, value: 15, label: "React-Query(TanStack-Query)", delay: 0.15 },
      { id: 3, value: 45, label: "React-Native", delay: 0.2 },
      { id: 4, value: 33, label: "TypeScript", delay: 0.25 },
      { id: 5, value: 41, label: "JavaScript", delay: 0.3 },
    ],
  },
  {
    id: 2,
    title: "Backend",
    list: [
      { id: 1, value: 10, label: "i18n", delay: 0.1 },
      { id: 2, value: 13, label: "Prisma", delay: 0.15 },
      { id: 3, value: 32, label: "Zustand", delay: 0.2 },
    ],
  },
  {
    id: 3,
    title: "CSSFrameworks",
    list: [
      { id: 1, value: 95, label: "TailwindCSS", delay: 0.1 },
      { id: 2, value: 86, label: "Scss", delay: 0.15 },
      { id: 3, value: 98, label: "Css", delay: 0.2 },
      { id: 4, value: 76, label: "Css-in-Js", delay: 0.25 },
    ],
  },
  {
    id: 4,
    title: "Tools",
    list: [
      { id: 1, value: 73, label: "GitHub", delay: 0.1 },
      { id: 2, value: 46, label: "GitLab", delay: 0.15 },
      { id: 3, value: 26, label: "Vercel", delay: 0.2 },
      { id: 4, value: 26, label: "Netlify", delay: 0.25 },
    ],
  },
];
