import {
  FcInTransit,
  FcInspection,
  FcFullTrash,
  FcFlashOn,
  FcNeutralDecision,
} from "react-icons/fc";

export const FeaturedataOne = [
  {
    id: 1,
    icon: <FcInTransit style={{ fontSize: "2em" }} />,
    desc: "We’ll give you a free debit card. Order it right in the app.",
  },
  {
    id: 2,
    icon: <FcInspection style={{ fontSize: "2em" }} />,
    desc: "Create smart budgets to help you take control of your spending.",
  },
  {
    id: 3,
    icon: <FcFullTrash style={{ fontSize: "2em" }} />,
    desc: "See where your money goes without solving equations.",
  },
];

export const FeaturedataTwo = [
  {
    id: 11,
    icon: <FcFlashOn style={{ fontSize: "2em" }} />,
    desc: "We’ll give you a free debit card. Order verbally right in the app.",
  },
  {
    id: 12,
    icon: <FcNeutralDecision style={{ fontSize: "2em" }} />,
    desc: "Create smart budgets to help you take control of your spending.",
  },
];

export default FeaturedataOne;
