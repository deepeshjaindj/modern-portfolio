import { SiLinkedin, SiGithub, SiStackoverflow, SiX } from "react-icons/si";

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

const SOCIAL_LINKS = [
  {
    href: "http://linkedin.com/in/deepeshjain-dj",
    label: "LinkedIn",
    icon: <SiLinkedin />,
  },
  {
    href: "https://github.com/deepeshjaindj",
    label: "GitHub",
    icon: <SiGithub />,
  },
  {
    href: "https://stackoverflow.com/users/14953697/deepesh-jain",
    label: "Stack Overflow",
    icon: <SiStackoverflow />,
  },
  {
    href: "https://twitter.com/deepeshjaindj2",
    label: "Twitter",
    icon: <SiX />,
  },
];

export {
  FIRST_CARD_ANIMATION_OFFERINGS,
  SECOND_CARD_ANIMATION_OFFERINGS,
  FILE_TREE_ELEMENTS,
  SOCIAL_LINKS,
};
