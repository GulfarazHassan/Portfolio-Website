import React from "react";
import { Button } from "../BottonElementA";
import CV from "../../images/cv/gulfaraz.pdf";
import Image1 from "../../images/svg01.svg";
import {
  Column2,
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  List,
  ListElements,
} from "./InfoElements";

export default function About() {
  let data = {
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
  return (
    <InfoContainer lightBg={data.lightBg} id={data.id}>
      <InfoWrapper>
        <InfoRow imgStart={data.imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{data.topLine}</TopLine>
              <Heading lightText={data.lightText}>{data.headLine}</Heading>
              <Subtitle darkText={data.darkText}>{data.description}</Subtitle>
              <TopLine>
                Following are the technologies i used to develop full stack Web
                and Mobile apps:
              </TopLine>
              <Subtitle darkText={data.darkText}>
                <b>NodeJS & ExpressJS</b> (I use NodeJS for developing{" "}
                <b>Backends</b> for web and mobile apps. I develop both small
                and large scale apps like online lessons booking app, management
                of inventory, food orderings apps and many more)
              </Subtitle>
              <Subtitle darkText={data.darkText}>
                <b>Databases</b> (For database for an app i used MongoDB and
                postgresSQL)
              </Subtitle>
              <Subtitle darkText={data.darkText}>
                <b>ReactJS</b> (I develop frontend of apps using ReactJS which
                are fully responsive to all screen sizes)
              </Subtitle>
              <Subtitle darkText={data.darkText}>
                <b>React Native</b> (I develop <b>Mobile</b> apps for both
                Android and IOS using react native which is great for small as
                well as large scale apps)
              </Subtitle>
              <BtnWrap>
                <Button
                  href={CV}
                  download
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={data.primary ? 1 : 0}
                  dark={data.dark ? 1 : 0}
                  dark2={data.dark2 ? 1 : 0}>
                  {data.buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={data.img} alt={data.alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}
