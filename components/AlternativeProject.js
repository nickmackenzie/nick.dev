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

export default function AlternativeProject(props) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
      <Flex justifyItems="center" justifyContent="center">
        <Box maxWidth="60rem" marginTop="2rem">
          <Image
            src={props.image}
            alt="3 women looking at a laptop"
            w="auto"
            h="auto"
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
          {props.stack}
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
          {props.name}
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
        >
          {props.description}
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
            href={props.liveURL}
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
            href={props.sourceCodeURL}
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
    </SimpleGrid>
  );
}
