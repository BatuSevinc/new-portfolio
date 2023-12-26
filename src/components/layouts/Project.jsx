import React from "react";
import { motion } from "framer-motion";
import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
  Button2,
} from "../../styles/Global.styled";

import {
  ProjectImage,
  ProjectImageContainer,
  TechStackCard,
} from "../../styles/MyProject.styled";

import { FaGithub } from "react-icons/fa";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";
import { Link } from "react-router-dom";

const Project = ({ data }) => {
  return (
    <div>
      <FlexContainer
        direction={data.reverse ? "row-reverse" : false}
        fullWidthChild
      >
        <motion.div
          variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <FlexContainer align="center" gap="1rem">
            <Heading as="h3" size="h3" bottom="0.3rem">
              {data.project_name}
            </Heading>
            <Link to={data.project_source} target="_blank">
            <IconContainer color="blue" size="2rem">
              <FaGithub />
            </IconContainer>
            </Link>
          </FlexContainer>
          <PaddingContainer top="1rem">
            <FlexContainer gap="1.5rem">
              {data.tech_stack.map((stack, index) => (
                <TechStackCard key={index}>{stack}</TechStackCard>
              ))}
            </FlexContainer>
          </PaddingContainer>
          <ParaText top="1.5rem" bottom="2rem">
            {data.project_desc}
          </ParaText>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
            <Link to={data.project_url} target="_blank">
          <Button>
              Visit Website
          </Button>
            </Link>
            <Link to={data.project_source} target="_blank">
          <Button2>
              Source Code
          </Button2>
            </Link>
            </div>
        </motion.div>

        <div>
          <ProjectImageContainer
            align="center"
            as={motion.div}
            variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
            justify={data.reverse ? "flex-start" : "flex-end"}
          >
            <Link to={data.project_url} target="_blank">
              <ProjectImage src={data.project_img} alt={data.project_name} />
            </Link>
          </ProjectImageContainer>
        </div>
      </FlexContainer>
    </div>
  );
};

export default Project;
