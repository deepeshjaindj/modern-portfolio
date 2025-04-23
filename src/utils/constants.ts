const SLUGS_FOR_TECH_CLOUD = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "sonarqube",
  "figma",
  "mongodb",
  "strapi",
  "netlify",
  "tailwindcss",
];

const FIRST_CARD_ANIMATION_OFFERINGS = {
  initial: {
    x: 20,
    rotate: -5,
  },
  hover: {
    x: 0,
    rotate: 0,
  },
};
const SECOND_CARD_ANIMATION_OFFERINGS = {
  initial: {
    x: -20,
    rotate: 5,
  },
  hover: {
    x: 0,
    rotate: 0,
  },
};

const FILE_TREE_ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];

export {
  SLUGS_FOR_TECH_CLOUD,
  FIRST_CARD_ANIMATION_OFFERINGS,
  SECOND_CARD_ANIMATION_OFFERINGS,
  FILE_TREE_ELEMENTS,
};
