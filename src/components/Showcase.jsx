import React from "react";
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import {
  ShowcaseImageCard,
  ShowcaseParticleContainer,
  Particle,
} from "../styles/Showcase.styled";

import ShowcaseImg from "../assets/showcase-img.jpg";
import BackgroundImg from "../assets/particle.png";

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer align="start" fullWidthChild>
        <div>
          <Heading as="h4" size="h4">
            Hello!
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            I'm <BlueText> Batuhan Sevinç</BlueText>
          </Heading>
          <Heading>
            I'm a <BlueText>Frontend Developer</BlueText>
          </Heading>

          <ParaText>
            Hello, my name is Batuhan Sevinç. I'm a front-end developer width 3
            years if experience in creating and designing user-friendly websites
            and web applications.
          </ParaText>
          <FlexContainer gap="20px">
            <IconContainer color="white" size="1.5rem">
              <BsLinkedin />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <BsGithub />
            </IconContainer>
          </FlexContainer>
        </div>

        <FlexContainer justify="flex-end">
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img width={300} src={ShowcaseImg} alt="show-img" />
            </ShowcaseImageCard>
            <Particle
              src={BackgroundImg}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />
             <Particle
              src={BackgroundImg}
              alt="particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />
            <Particle
              src={BackgroundImg}
              alt="particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
