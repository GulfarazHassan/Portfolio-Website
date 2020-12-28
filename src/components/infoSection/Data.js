import Image1 from "../../images/svg01.svg";
import Image2 from "../../images/svg02.svg";
import Image3 from "../../images/svg03.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headLine: "Unlimited transaction with zero fee",
  buttonLabel: "Get started",
  description:
    "Get access to our exclusive app that allowes you to send unlimited transaction without getting chatged any fee",
  imgStart: false,
  img: Image1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited access",
  headLine: "Unlimited transaction with zero fee",
  buttonLabel: "Learn more",
  description:
    "Get access to our exclusive app that allowes you to send unlimited transaction without getting chatged any fee",
  imgStart: true,
  img: Image2,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our team",
  headLine: "Creating account is extreamly easy",
  buttonLabel: "Start Now",
  description:
    "Get access to our exclusive app that allowes you to send unlimited transaction without getting chatged any fee",
  imgStart: false,
  img: Image3,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
};
