import React, { useRef, useEffect, useState } from "react";
import {
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  Button,
  Lorem,
  Image,
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  Icon,
  Center,
} from "@chakra-ui/react";
import { GoNoNewline } from "react-icons/go";
import { ImHeadphones } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { DiGithubAlt } from "react-icons/di";
export default function ModalAbout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [albumArt, setAlbumArt] = useState();
  let [albumSongString, getSongDetails] = useState();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Center>
        <Box
          margin="0 auto"
          position="fixed"
          zIndex="10"
          left="0"
          top="0"
          overflow="auto"
          id="myModal"
          class="modal"
        >
          <Box margin="0 auto" height="50%" class="modal-content">
            <span
              float="right"
              class="close"
              _hover={{
                color: "black",
                textDecoration: "none",
                cursor: "cursor",
              }}
              _focus={{
                color: "black",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              &times;
            </span>
            <p>
              {" "}
              <Flex alignItems="center">
                <Box
                  w="sm"
                  bg={useColorModeValue("white", "gray.800")}
                  shadow="2xl"
                  rounded="md"
                  overflow="hidden"
                >
                  {" "}
                  <Image
                    w="full"
                    h={56}
                    fit="fit"
                    objectPosition="center"
                    src="/images/headshot.jpg"
                    alt="avatar"
                  />
                  <Flex alignItems="center" px={6} py={3} bg="gray.900">
                    <Icon m="2" as={ImHeadphones} h={6} w={6} color="white" />
                    <Image id="albumArt" src={albumArt} />
                    <chakra.h1
                      mx={3}
                      color="white"
                      fontWeight="bold"
                      fontSize="lg"
                      id="lastPlayed"
                    >
                      {albumSongString}
                    </chakra.h1>
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
                      fontSize="lg"
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
                        as={GrLinkedin}
                        as={GrLinkedin}
                        h={6}
                        w={6}
                        mr={2}
                      />

                      <chakra.h1 px={2} fontSize="sm">
                        @nick-mackenzie-5061411bb
                      </chakra.h1>
                    </Flex>

                    <Flex
                      alignItems="center"
                      mt={4}
                      color={useColorModeValue("gray.700", "gray.200")}
                    >
                      <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                      <chakra.h1 px={2} fontSize="sm">
                        Ontario,Canada
                      </chakra.h1>
                    </Flex>
                    <Flex
                      alignItems="center"
                      mt={4}
                      color={useColorModeValue("gray.700", "gray.200")}
                    >
                      <Icon as={DiGithubAlt} h={6} w={6} mr={2} />

                      <chakra.h1 px={2} fontSize="sm">
                        @nickmackenzie
                      </chakra.h1>
                    </Flex>
                    <Flex
                      alignItems="center"
                      mt={4}
                      color={useColorModeValue("gray.700", "gray.200")}
                    >
                      <Icon as={DiGithubAlt} h={6} w={6} mr={2} />

                      <chakra.h1 px={2} fontSize="sm">
                        @resume
                      </chakra.h1>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </p>
          </Box>
        </Box>
      </Center>
    </>
  );
}
