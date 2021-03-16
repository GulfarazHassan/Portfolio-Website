import React, { useState } from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  BtnWrap,
} from "./ServicesElements";
import { Button } from "../ButtonElement";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Icon1 from "../../images/svg01.svg";
import Icon2 from "../../images/svg02.svg";
import Icon3 from "../../images/svg03.svg";
import w1 from "../../images/yelloschool/1.png";
import w2 from "../../images/yelloschool/2.png";
import w3 from "../../images/yelloschool/3.png";
import w4 from "../../images/yelloschool/4.png";
import w5 from "../../images/yelloschool/5.png";
import w6 from "../../images/yelloschool/6.png";
import w7 from "../../images/yelloschool/7.png";
import w8 from "../../images/yelloschool/8.png";
import m1 from "../../images/reactnative/n1.jpeg";
import m2 from "../../images/reactnative/n2.jpeg";
import m3 from "../../images/reactnative/n3.jpeg";
import m4 from "../../images/reactnative/n4.jpeg";
import m5 from "../../images/reactnative/n5.jpeg";
import m6 from "../../images/reactnative/n6.jpeg";
import m7 from "../../images/reactnative/n7.jpeg";
import m8 from "../../images/reactnative/n8.jpeg";
import m9 from "../../images/reactnative/n9.jpeg";
import m10 from "../../images/reactnative/n10.jpeg";
import m11 from "../../images/reactnative/n11.jpeg";
import m12 from "../../images/reactnative/n12.jpeg";
import m13 from "../../images/reactnative/n13.jpeg";
import m14 from "../../images/reactnative/n133.jpeg";
import m15 from "../../images/reactnative/n14.jpeg";
import m16 from "../../images/reactnative/n15.jpeg";
import m17 from "../../images/reactnative/n16.jpeg";
import d1 from "../../images/deployment/1.png";
import d2 from "../../images/deployment/2.png";
import d3 from "../../images/deployment/3.png";
import d4 from "../../images/deployment/4.png";

const images = [w7, w8, w1, w2, w3, w4, w5, w6];
const images2 = [
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  m10,
  m11,
  m12,
  m13,
  m14,
  m15,
  m16,
  m17,
];
const images3 = [d1, d2, d3, d4];

export default function Services() {
  const [nodejs, setNodejs] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [rn, setRn] = useState(false);
  const [photoRnIndex, setPhotoRnIndex] = useState(0);
  const [deploy, setDeploy] = useState(false);
  const [deployIndex, setDeployIndex] = useState(0);

  return (
    <>
      {nodejs && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setNodejs(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
      {rn && (
        <Lightbox
          mainSrc={images2[photoRnIndex]}
          nextSrc={images2[(photoRnIndex + 1) % images.length]}
          prevSrc={
            images2[(photoRnIndex + images2.length - 1) % images2.length]
          }
          onCloseRequest={() => setRn(false)}
          onMovePrevRequest={() =>
            setPhotoRnIndex(
              (photoRnIndex + images2.length - 1) % images2.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoRnIndex((photoRnIndex + 1) % images2.length)
          }
        />
      )}
      {deploy && (
        <Lightbox
          mainSrc={images3[deployIndex]}
          nextSrc={images3[(deployIndex + 1) % images.length]}
          prevSrc={images2[(deployIndex + images3.length - 1) % images3.length]}
          onCloseRequest={() => setDeploy(false)}
          onMovePrevRequest={() =>
            setDeployIndex((deployIndex + images3.length - 1) % images3.length)
          }
          onMoveNextRequest={() =>
            setDeployIndex((deployIndex + 1) % images3.length)
          }
        />
      )}
      <ServicesContainer id='services'>
        <ServicesH1>My Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>MERN Stack</ServicesH2>
            <ServicesP>
              Develop full stack web apps using NodeJs, ReactJS, ExpressJS and
              MongoDB.
            </ServicesP>
            <BtnWrap>
              <Button to='#' onClick={() => setNodejs(true)}>
                View Demo
              </Button>
            </BtnWrap>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>React Native</ServicesH2>
            <ServicesP>
              Develop your dream apps for both Andrdoid and IOS apps.
            </ServicesP>
            <BtnWrap>
              <Button to='#' onClick={() => setRn(true)}>
                View Demo
              </Button>
            </BtnWrap>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Apps Deployment</ServicesH2>
            <ServicesP>
              Deploy web app to AWS/Heroku/Firebase and Mobile apps to App
              Store.
            </ServicesP>
            <BtnWrap>
              <Button to='#' onClick={() => setDeploy(true)}>
                View Demo
              </Button>
            </BtnWrap>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}
