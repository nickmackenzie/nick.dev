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

        <Flex justifyContent="space-between" width="60%">
          <Box display="inline-flex" rounded="md" shadow="md">
            <chakra.a
              mt={2}
              py={8}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={useColorModeValue("black")}
              bg={useColorModeValue("gray.400", "brand.500")}
              _hover={{
                bg: useColorModeValue("gray.500", "brand.600"),
              }}
            >
              Live Demo
              <Icon as={FiExternalLink} ml={2} />
            </chakra.a>
          </Box>
          <Box display="inline-flex" rounded="md" shadow="md">
            <chakra.a
              mt={2}
              py={8}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={useColorModeValue("black")}
              bg={useColorModeValue("gray.400", "brand.500")}
              _hover={{
                bg: useColorModeValue("gray.500", "brand.600"),
              }}
            >
              Source Code
              <Icon as={FiExternalLink} ml={2} />
            </chakra.a>
          </Box>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
}
