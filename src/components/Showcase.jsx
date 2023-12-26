import React from "react";

import { motion } from "framer-motion";

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
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="18%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer align="start" fullWidthChild>
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
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
            Hello, my name is Batuhan Sevinç. I'm frontend developer with 3 years experience in creating and designing user-friendly websites
            and web applications.
          </ParaText>
          <FlexContainer gap="20px" responsiveFlex>
          <Link to="https://www.linkedin.com/in/batusevinc/" target="_blank">
            <IconContainer color="white" size="1.5rem">
              <BsLinkedin />
            </IconContainer>
            </Link>
            <Link to="https://github.com/BatuSevinc" target="_blank">
            <IconContainer color="white" size="1.5rem">
              <BsGithub />
            </IconContainer>
            </Link>
          </FlexContainer>
        </motion.div>

        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          justify="flex-end"
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img width={300} src={ShowcaseImg} alt="show-img" />
            </ShowcaseImageCard>
            <Particle
              as={motion.img}
              animate={{
                x:[0,100,0],
                rotate:360,
                scale:[1,0.5,1],
              }}
              transition={{
                duration:20,
                repeat:Infinity
              }}
              src={BackgroundImg}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />
            <Particle
            as={motion.img}
            animate={{
              y:[0,100,0],
              rotate:360,
              scale:[1,0.8,1],
            }}
            transition={{
              duration:18,
              repeat:Infinity
            }}
              src={BackgroundImg}
              alt="particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />
            <Particle
            as={motion.img}
            animate={{
              y:[0,-100,0],
              rotate:360,
              scale:[1,0.9,1],
            }}
            transition={{
              duration:15,
              repeat:Infinity
            }}
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
