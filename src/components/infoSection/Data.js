import Image1 from "../../images/svg01.svg";
import Image2 from "../../images/svg02.svg";
import Image3 from "../../images/svg03.svg";
import ImageAws from "../../images/aws.svg";

// I love learning new things every day related to technology and my competition is with the person i am yesterday.
export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Full Stack Developer",
  headLine: "MERN Stack & React Native",
  buttonLabel: "My CV",
  description:
    "I develop full stack applications for web and mobile. I used NodeJs, ExpressJS and MongoDb for bakcend development and for frontend development i used ReactJs and for Mobile Apps development i used React Native.",
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
  topLine: "AWS (Amazon Web Services)",
  headLine: "MERN Stack",
  buttonLabel: "My CV",
  description:
    "I develop full stack web apps using NodeJS, ExpressJs for backend & MongoDB, Firebase for database and for forntend i use ReactJS",
  imgStart: true,
  img: ImageAws,
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
  topLine: "Amazon Web Services",
  headLine: "NodeJS & ReactJS apps demplyment on AWS",
  buttonLabel: "My CV",
  description:
    "I deploy web base apps on AWS using EC2 instance and Lightsail instances. I use AWS cognito for user authentisation/authorization and AWS Lambda nodeJS functions for serverless programming. Also deploy apps on Heroku & Firebase.",
  imgStart: false,
  img: Image3,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
};
