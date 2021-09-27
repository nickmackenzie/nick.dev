import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
  Image,
  propNames,
  Button,
} from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";



let projects =
  [
    {
      image: "/images/namematch.png",
      description: "A Full Stack App using MongoDB for the database and ReactJS with ChakaraUI as a front- end.This app allows users to 'like' or 'dislike' name suggestions and match with your partner.",
      liveURL: "http://name-match.herokuapp.com/",
      sourceCodeURL: "https://github.com/nickmackenzie/namematch",
      techIcons: "",
      stack: "ReactJS | NodeJS | Mongo-DB",
      name: "NameMatch",
      altText: ""
    },
    {
      image: "/images/souschef.png",
      description: "A Full Stack React app and MongoDB. It utilizes the PrimeReact library for the UI. It Helps organize working cooks with a global prep lists that sets the right amount of 'par-lev' according to the day. ",
      liveURL: "https://souschef3.herokuapp.com/",
      sourceCodeURL: "https://github.com/nickmackenzie/souschef",
      techIcons: "",
      stack: "ReactJS | Mongo-DB | NodeJs | JWT-Authentication",
      name: "SousChef",

    }, {
      image: "images/hangman.png",
      description: "A hangman game made with pure JavaScript, HTML and CSS.",
      liveURL: "https://nickmackenzie.github.io/hangman/",
      sourceCodeURL: "https://github.com/nickmackenzie/hangman",
      techIcons: "",
      stack: "HTML | CSS | JavaScript",
      name: "Don't Fall Off The Water Fall!",
    }, {
      image: "/images/trivia.png",
      description: "A 'live' multiplayer trivia game with live leader boards. Utilizes Django, OpenTDB API and a MySQL database.",
      liveURL: "http://trivia-night-django-app.herokuapp.com/",
      sourceCodeURL: "https://github.com/nickmackenzie/Trivia-Night",
      techIcons: "",
      stack: "Django | Python | MySQL | JavaScript",
      name: "Trivia Night"
    }, {
      image: "images/codesave.png",
      description: "A NodeJs App using Google Authentication. It allows users to save their code 'snippets' to a cloud database. Supports over 15+ languages with automatic syntax highlighting.",
      liveURL: "https://code-save.herokuapp.com/",
      sourceCodeURL: "https://github.com/nickmackenzie/code-save/",
      techIcons: "",
      stack: "NodeJS | ExpressJS | MongoDB | Google Authentication API | EJS Templates",
      name: "CodeSave"
    }
  ]




export default function AlternativeProject(props) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>

      {projects.map((character, i) => (
        <>
          <Flex justifyItems="center" justifyContent="center">
            <Box maxWidth="45rem" marginTop=".1rem">
              <Image
                src={character.image}
                w="auto"
                h="auto"
                rounded="md"
                m="6"
                bg="gray.200"
                loading="lazy"
                shadow="lg"
              />
            </Box>{" "}
          </Flex>
          <Flex
            direction="column"
            alignItems="start"
            justifyContent="center"
            px={{ base: 4, md: 8, lg: 20 }}
            py={24}
            zIndex={3}
          >
            <chakra.span
              color={useColorModeValue("brand.600", "gray.300")}
              fontSize="lg"
              textTransform="uppercase"
              fontWeight="extrabold"
            >
              {character.stack}
            </chakra.span>
            <chakra.h1
              mb={4}
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color={useColorModeValue("brand.600", "gray.300")}
              lineHeight="shorter"
              textShadow="2px 0 currentcolor"
            >
              {character.name}
            </chakra.h1>
            <chakra.p
              pr={{ base: 0, lg: 16 }}
              mb={4}
              fontSize="lg"
              color={useColorModeValue("brand.600", "gray.400")}
              letterSpacing="wider"
            >
              {character.description}
            </chakra.p>

            <Flex>
              <Button
                as="a"
                colorScheme="green"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: "full", sm: "auto" }}
                mb={{ base: 2, sm: 0 }}
                size="lg"
                m="2"
                target="_blank"
                href={character.liveURL}
              >
                Live Demo
                <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Icon>
              </Button>
              <Button
                as="a"
                colorScheme="green"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: "full", sm: "auto" }}
                mb={{ base: 2, sm: 0 }}
                size="lg"
                target="_blank"
                m="2"
                href={character.sourceCodeURL}
              >
                Source Code
                <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Icon>
              </Button>
            </Flex>
          </Flex>
        </>
      ))}


    </SimpleGrid>
  );
}
