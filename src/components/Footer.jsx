import React from 'react'
import { motion } from 'framer-motion'
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  BlueText,
  Button
} from '../styles/Global.styled'

import {ContactForm, FormInput, FormLabel} from '../styles/Footer.styled'
import { fadeInBottomVariants } from '../utils/Variants'

const Footer = () => {
  return (
    <PaddingContainer
    id='Contact'
    top="5%"
    bottom="10%"
    >
        <Heading
        as={motion.h4}
        variants={fadeInBottomVariants}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
        >
          MY CONTACT
        </Heading>
        <Heading
          as={motion.h2}
          variants={fadeInBottomVariants}
          initial="hidden"
          whileInView="visible"
          size="h2"
          align="center"
          top="0.5rem"
        >
          Contact <BlueText>Me Here</BlueText>
        </Heading>

        <PaddingContainer top="3rem">
          <FlexContainer justify="center">
          <ContactForm
          as={motion.form}
          variants={fadeInBottomVariants}
          initial="hidden"
          whileInView="visible"
          >
              <PaddingContainer bottom="2rem">
                <FormLabel>Name:</FormLabel>
                <FormInput type="text" placeholder='Enter your name'/>
              </PaddingContainer>
          
      

          
              <PaddingContainer bottom="2rem">
                <FormLabel>Email:</FormLabel>
                <FormInput type="email" placeholder='Enter your email'/>
              </PaddingContainer>
    

              <PaddingContainer bottom="2rem">
                <FormLabel>Message:</FormLabel>
                <FormInput as="textarea" placeholder='Enter your message'/>
              </PaddingContainer>

          <FlexContainer justify="center" responsiveFlex>

            <Button>Send Message</Button>

          </FlexContainer>

          </ContactForm>
          </FlexContainer>
        </PaddingContainer>

    </PaddingContainer>
  )
}

export default Footer