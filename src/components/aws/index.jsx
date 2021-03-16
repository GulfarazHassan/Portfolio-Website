import React from "react";
import { Button } from "../BottonElementA";
import CV from "../../images/cv/gulfaraz.pdf";
import ImageAws from "../../images/aws.svg";
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

export default function AWS() {
  let data = {
    id: "aws",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "AWS (Amazon Web Services)",
    headLine: "AWS Development",
    buttonLabel: "My CV",
    description:
      "I develop full stack web apps using NodeJS, ExpressJs for backend & MongoDB, Firebase for database and for forntend i use ReactJS.",
    imgStart: true,
    img: ImageAws,
    alt: "Car",
    dark: false,
    primary: false,
    darkText: true,
  };
  return (
    <InfoContainer lightBg={data.lightBg} id='aws'>
      <InfoWrapper>
        <InfoRow imgStart={data.imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{data.topLine}</TopLine>
              <Heading lightText={data.lightText}>{data.headLine}</Heading>
              <Subtitle darkText={data.darkText}>{data.description}</Subtitle>
              <TopLine>
                Following are the Amazon Web Services (AWS) i worked on:
              </TopLine>
              <Subtitle darkText={data.darkText}>
                <b>Amazon EC2</b> (Amazon Elastic Compute Cloud is a part of
                Amazon Web Services, that allows users to rent virtual computers
                on which to run their own computer applications. I use EC2 to
                deploy my full stack web application including backend (NodeJS)
                and frontend (ReactJS))
              </Subtitle>
              <Subtitle darkText={data.darkText}>
                <b>Amazon Lightsail</b> (Lightsail is an easy-to-use cloud
                platform that offers you everything needed to build an
                application or website, plus a cost-effective, monthly plan.
                When i was new to aws at that time i used Lightsail to deploy my
                web applications there.)
              </Subtitle>
              <Subtitle darkText={data.darkText}>
                <b>Amazon DynamoDB</b> (Amazon DynamoDB is a fully managed
                proprietary NoSQL database service, it is like <b>MongoDB</b>{" "}
                that supports key-value and document data structures. I used
                DynamoDB as database storage for my web and mobile
                applications.)
              </Subtitle>
              <Subtitle darkText={data.darkText}>
                <b>Amazon Route 53</b> (I connect my <b>Domain name</b> DNS
                using Route 53)
              </Subtitle>
              <Subtitle darkText={data.darkText}>
                <b>Amazon Lambda </b> (AWS Lambda is an event-driven, serverless
                computing platform. It is a computing service that runs code in
                response to events and automatically manages the computing
                resources required by that code. I use Lambda for NodeJS
                serverless programming)
              </Subtitle>

              <Subtitle darkText={data.darkText}>
                <b>Amazon Cognito</b> (Amazon Cognito provides authentication,
                authorization, and user management for your web and mobile apps.
                I used cognito to implement user authentication/authorization in
                my web and mobile applications)
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
