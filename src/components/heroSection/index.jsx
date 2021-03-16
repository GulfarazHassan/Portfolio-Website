import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
} from "./heroElements";
import { Button } from "../BottonElementA";
import Video from "../../videos/video.mp4";
import CV from "../../images/cv/gulfaraz.pdf";
export default function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mo4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          MERN(MongoDb, ExpressJs, ReactJS, NodeJS) Stack & React Native
        </HeroH1>
        <HeroP>Full stack web development & Mobile development</HeroP>
        <HeroBtnWrapper>
          <Button
            href={CV}
            download
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            dark='true'>
            Downloade my CV {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
