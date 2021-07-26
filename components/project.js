import Link from "next/link";
import LandingText from "../components/landingText";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  chakra,
  TabPanel,
  Flex,
  Center,
  Box,
  Text,
  useColorMode,
  useColorModeValue,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";

export default function Project(props) {
  return (
    <Box
      w={{ base: "full", md: 10 / 12 }}
      mx="auto"
      mt={2}
      textAlign="center"
      bg="gray.200"
      rounded="2xl"
    >
      <Flex>
        <Center flexDir="column">
          <Box
            w="50%"
            class="about-text"
            fontSize="1.4rem"
            textAlign="center"
            mb={6}
            fontWeight="bold"
            lineHeight="1.2"
            letterSpacing={{ base: "normal", md: "tight" }}
            color={useColorModeValue("gray.900", "gray.100")}
          ></Box>

          <Flex></Flex>
        </Center>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("brand.500")}
        px={8}
        py={24}
        mx="auto"
      >
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          pr={{ md: 20 }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color={useColorModeValue("white", "gray.100")}
            mb={6}
          >
            <chakra.span
              display="block"
              color={useColorModeValue("white", "gray.500")}
            ></chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            {props.description}
          </chakra.p>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mb={{ base: 4, md: 8 }}
            spacing={2}
          >
            <Box display="inline-flex" rounded="md">
              <Stack direction="row" m="1" spacing={4} align="center">
                <Button colorScheme="blue" variant="solid">
                  Live Demo
                </Button>
                <Button colorScheme="blue" variant="outline">
                  Source Code
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
          <Image
            w="full"
            rounded="lg"
            src={props.image}
            alt="Hellonext feedback boards software screenshot"
          />
        </Box>
      </Flex>
    </Box>
  );
}
