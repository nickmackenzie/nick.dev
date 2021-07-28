import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
  Image,
  DrawerOverlay,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
  Input,
  DrawerFooter,
} from "@chakra-ui/react";
import { MdHeadset, MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
export default function ContactMe() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        as="a"
        ref={btnRef}
        colorScheme="blue"
        onClick={onOpen}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        w={{ base: "full", sm: "auto" }}
        mb={{ base: 2, sm: 0 }}
        size="lg"
        m="1"
      >
        About Me
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Box
              w="sm"
              mx="auto"
              bg={useColorModeValue("white", "gray.800")}
              shadow="lg"
              rounded="lg"
              overflow="hidden"
            >
              <Image
                w="full"
                h={56}
                fit="fit"
                objectPosition="center"
                src="/images/headshot.jpg"
                alt="avatar"
              />

              <Flex alignItems="center" px={6} py={3} bg="gray.900">
                <Icon as={MdHeadset} h={6} w={6} color="white" />

                <chakra.h1
                  mx={3}
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                ></chakra.h1>
              </Flex>

              <Box py={4} px={6}>
                <chakra.h1
                  fontSize="xl"
                  fontWeight="bold"
                  color={useColorModeValue("gray.800", "white")}
                >
                  Nick MacKenzie
                </chakra.h1>

                <chakra.p
                  py={2}
                  color={useColorModeValue("gray.700", "gray.400")}
                >
                  Full Stack maker & UI / UX Designer , love hip hop music
                  Author of Building UI.
                </chakra.p>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon
                    as={BsFillBriefcaseFill}
                    as={BsFillBriefcaseFill}
                    h={6}
                    w={6}
                    mr={2}
                  />

                  <chakra.h1 px={2} fontSize="sm">
                    Choc UI
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                    California
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={MdEmail} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                    patterson@example.com
                  </chakra.h1>
                </Flex>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
