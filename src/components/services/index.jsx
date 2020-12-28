import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import Icon1 from "../../images/svg01.svg";
import Icon2 from "../../images/svg02.svg";
import Icon3 from "../../images/svg03.svg";

export default function Services() {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help reduce your expenses and increase overall ravenue
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual offices</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium benefits</ServicesH2>
          <ServicesP>
            unlock our premium membership and get 5% cash back.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}
