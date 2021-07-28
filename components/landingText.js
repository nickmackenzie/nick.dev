import React, { useRef, useEffect } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
  Link,
  Flex,
  Center,
} from "@chakra-ui/react";
import DevIcon from "devicon-react-svg";
import { Img } from "@chakra-ui/react";
import { GoLogoGithub } from "react-icons/go";
import { GrLinkedin, GrDocumentPdf } from "react-icons/gr";
import { TiHtml5 } from "react-icons/ti";
import {
  SiCss3,
  SiReact,
  SiVisualstudiocode,
  SiGit,
  SiJavascript,
} from "react-icons/si";
import { FaSass } from "react-icons";
import AlternativeProject from "../components/AlternativeProject";
import AlternativeReverse from "../components/AlternativeReverse";
import ContactMe from "../components/ContactMe";
let iconSize = "6rem";
const devIconStyle = {
  react: { fill: "gray" },
  html: { fill: "gray" },
  js: { fill: "gray" },
  vscode: { fill: "gray" },
  sass: { fill: "gray" },
  css: { fill: "gray" },
};
const useScroll = () => {
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return [executeScroll, myRef];
};

export default function App() {
  const [executeScroll, myRef] = useScroll();

  return (
    <>
      <Box px={8} py={24} mx="auto">
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          textAlign={{ base: "left", md: "center" }}
        >
          <chakra.h1
            mb={6}
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{ base: "normal", md: "tight" }}
            color={useColorModeValue("gray.900", "gray.100")}
          >
            Hello, I'm{" "}
            <Text
              display={{ base: "block", lg: "inline" }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, blue.400,teal.500)"
              fontWeight="extrabold"
            >
              Nick MacKenzie
            </Text>
            <br></br>
            <Text
              display={{ base: "block", lg: "inline" }}
              w="full"
              bgClip="text"
              color="gray.600"
              fontSize="3rem"
            >
              Web Developer
            </Text>
          </chakra.h1>
          <chakra.h4
            mb={6}
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{ base: "normal", md: "tight" }}
            color="gray.900"
          >
            I like working with{" "}
            <Text
              display={{ base: "block", lg: "inline" }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, blue.400,teal.500)"
              fontWeight="extrabold"
            >
              computers&nbsp;
            </Text>
            and<br></br>
            <Text
              display={{ base: "block", lg: "inline" }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, blue.400,teal.500)"
              fontWeight="extrabold"
            >
              making things.
            </Text>
            <Flex justifyContent="center" marginTop="2rem">
              <DevIcon
                width={iconSize}
                icon="html5"
                style={devIconStyle.html}
              />
              <DevIcon
                width={iconSize}
                icon="javascript"
                logoStyle="original"
                color="white"
                style={devIconStyle.js}
              />

              <DevIcon
                style={devIconStyle.react}
                width={iconSize}
                icon="react"
              />
              <DevIcon width={iconSize} icon="css3" />
              <DevIcon width={iconSize} icon="sass" />
              <DevIcon width={iconSize} icon="npm" />
              <DevIcon
                width={iconSize}
                icon="visualstudio"
                style={devIconStyle.vscode}
              />
              <DevIcon width={iconSize} icon="git" />
            </Flex>
          </chakra.h4>

          <chakra.p
            px={{ base: 0, lg: 24 }}
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            <div class="wrapper">
              <div class="hero-image">
                <div class="hero-text"></div>
              </div>
            </div>
          </chakra.p>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mb={{ base: 4, md: 8 }}
            spacing={2}
            justifyContent={{ sm: "left", md: "center" }}
          >
            <Button
              as="a"
              colorScheme="blue"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              m="1"
              onClick={executeScroll}
            >
              Projects
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
            <ContactMe></ContactMe>
          </Stack>
        </Box>
      </Box>{" "}
      <Box ref={myRef}></Box> {/**For the project anchor link */}
      <AlternativeReverse
        image="/images/namematch.png"
        description="A Full Stack App using MongoDB as a backend and ReactJS with
            TailwindCSS as a front-end. This app always user to create their own
            account and set a personal code."
        liveURL="http://name-match.herokuapp.com/"
        sourceCodeURL="https://github.com/nickmackenzie/namematch"
        techIcons=""
        stack="ReactJS | NodeJS | Mongo-DB"
        name="NameMatch"
      ></AlternativeReverse>
      <AlternativeProject
        image="/images/souschef.png"
        description="A Full Stack React app with nodejs and MongoDB. It Helps organize working cooks with a global prep lists that sets the right amount of 'par-lev' according to the day. "
        liveURL="https://souschef3.herokuapp.com/"
        sourceCodeURL="https://github.com/nickmackenzie/souschef"
        techIcons=""
        stack="ReactJS | Mongo-DB | NodeJs | JWT-Authentication"
        name="SousChef"
      ></AlternativeProject>
      <AlternativeReverse
        image="images/hangman.png"
        description="A hangman game made with pure JavaScript, HTML and CSS."
        liveURL="https://nickmackenzie.github.io/hangman/"
        sourceCodeURL="https://github.com/nickmackenzie/hangman"
        techIcons=""
        stack="HTML | CSS | JavaScript"
        name="Don't Fall Off The Water Fall!"
      ></AlternativeReverse>
      <AlternativeProject
        image="/images/trivia.png"
        description="A multiplayer trivia game with live leader boards. Utilizes Django, Opentdb API and a MySQL database."
        liveURL="http://trivia-night-django-app.herokuapp.com/"
        sourceCodeURL="https://github.com/nickmackenzie/Trivia-Night"
        techIcons=""
        stack="Django | Python | MySQL | JavaScript"
        name="Trivia Night"
      ></AlternativeProject>
    </>
  );
}
