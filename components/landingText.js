import React, { useRef, useEffect } from "react";
import axios from 'axios'
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import DevIcon from "devicon-react-svg";
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
  const getData = async () => {



    axios.post('/api/visitors')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getData()



  }, [])

  return (
    <>
      <Box px={8} py={24} className='hero' mx="auto">
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
            <Text
              display={{ base: "block", lg: "inline" }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, gray.800,gray.600)"
              fontWeight="extrabold"
            >
              Nick MacKenzie
            </Text>{" "}
            <br></br>
            <Text
              display={{ base: "block", lg: "inline" }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, gray.600,gray.800)"
              fontSize="2.6rem"
            >
              Web Developer
            </Text>
          </chakra.h1>
          <chakra.h4
            mb={6}
            fontSize="2.2rem"
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
              code&nbsp;
            </Text>
            and<br></br>
            <Text
              display={{ base: "block", lg: "inline" }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, blue.400,teal.500)"
              fontWeight="extrabold"
            >
              solving problems.
            </Text>
            <Flex justifyContent="center" marginTop="2rem">
              <DevIcon
                width={iconSize}
                icon="html5"
                color={useColorModeValue("gray.900", "gray.100")}
              />
              <DevIcon
                width={iconSize}
                icon="javascript"
                logoStyle="original"

                color={useColorModeValue("gray.900", "gray.100")}
              />

              <DevIcon
                color={useColorModeValue("gray.900", "gray.100")}
                width={iconSize}
                icon="react"
              />
              <DevIcon
                width={iconSize}
                icon="css3"
                color={useColorModeValue("gray.900", "gray.100")}
              />
              <DevIcon
                width={iconSize}
                icon="sass"
                color={useColorModeValue("gray.900", "gray.100")}
              />
              <DevIcon
                width={iconSize}
                icon="npm"
                color={useColorModeValue("gray.900", "gray.100")}
              />
              <DevIcon
                width={iconSize}
                icon="visualstudio"
                color={useColorModeValue("gray.900", "gray.100")}
              />
              <DevIcon
                width={iconSize}
                icon="git"
                color={useColorModeValue("gray.900", "gray.100")}
              />
            </Flex>
          </chakra.h4>

          <chakra.p
            px={{ base: 0, lg: 24 }}
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            <div className="wrapper">
              <div className="hero-image">
                <div className="hero-text"></div>
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
        image="/images/namematch.webp"
        description="A Full Stack App using MongoDB for the database and ReactJS with
            ChakaraUI as a front-end. This app allows users to 'like' or 'dislike' name suggestions and match with your partner."
        liveURL="http://name-match.herokuapp.com/"
        sourceCodeURL="https://github.com/nickmackenzie/namematch"
        techIcons=""
        stack="ReactJS | NodeJS | Mongo-DB"
        name="NameMatch"
        altText=""
      ></AlternativeReverse>
      <AlternativeProject
        image="/images/souschef.png"
        description="A Full Stack React app and MongoDB. It utilizes the PrimeReact library for the UI. It Helps organize working cooks with a global prep lists that sets the right amount of 'par-lev' according to the day. "
        liveURL="https://souschef3.herokuapp.com/"
        sourceCodeURL="https://github.com/nickmackenzie/souschef"
        techIcons=""
        stack="ReactJS | Mongo-DB | NodeJs | JWT-Authentication"
        name="SousChef"
      ></AlternativeProject>
      <AlternativeReverse
        image="images/hangman.webp"
        description="A hangman game made with pure JavaScript, HTML and CSS."
        liveURL="https://nickmackenzie.github.io/hangman/"
        sourceCodeURL="https://github.com/nickmackenzie/hangman"
        techIcons=""
        stack="HTML | CSS | JavaScript"
        name="Don't Fall Off The Water Fall!"
      ></AlternativeReverse>
      <AlternativeProject
        image="/images/trivia.webp"
        description="A 'live' multiplayer trivia game with live leader boards. Utilizes Django, OpenTDB API and a MySQL database."
        liveURL="http://trivia-night-django-app.herokuapp.com/"
        sourceCodeURL="https://github.com/nickmackenzie/Trivia-Night"
        techIcons=""
        stack="Django | Python | MySQL | JavaScript"
        name="Trivia Night"
      ></AlternativeProject>
      <AlternativeReverse
        image="images/codesave.png"
        description="A NodeJs App using Google Authentication. It allows users to save their code 'snippets' to a cloud database. Supports over 15+ languages with automatic syntax highlighting."
        liveURL="https://code-save.herokuapp.com/"
        sourceCodeURL="https://github.com/nickmackenzie/code-save/"
        techIcons=""
        stack="NodeJS | ExpressJS | MongoDB | Google Authentication API | EJS Templates"
        name="CodeSave"
      ></AlternativeReverse>
    </>
  );
}