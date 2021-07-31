import React, { useState } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
  Image,
  Link,
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
  CloseButton,
} from "@chakra-ui/react";
import { MdHeadset, MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GrLinkedin, GrDocumentPdf } from "react-icons/gr";
import { DiGithubFull } from "react-icons/di";
import { ImSpotify, ImHeadphones } from "react-icons/im";
import axios from "axios";
export default function ContactMe() {
  const { isOpen, onOpen, onClose } = useDisclosure(getLastPlayedSong());
  let [albumArt, setAlbumArt] = useState();
  let [albumSongString, getSongDetails] = useState();
  const btnRef = React.useRef();
  function getLastPlayedSong() {
    let url = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer ",
    };

    axios
      .get(url, {
        headers: headers,
      })
      .then((response) => {
        setAlbumArt(response.data.items[0].track.album.images[2].url);
        getSongDetails(
          response.data.items[0].track.artists[0].name +
            " - " +
            response.data.items[0].track.album.name
        );
        console.log(response.data.items[0].track.album.name);
        console.log(response.data.items[0].track.album.images[2].url);
        console.log(response.data.items[0].track.artists[0].name);
        console.log(response.data.items[0].played_at);
      })
      .catch((error) => {
        console.log(error);
      });
  }
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
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody background="gray.200">
            <Flex alignItems="center">
              <DrawerCloseButton
                color="black"
                background="white"
                opacity=".7"
              ></DrawerCloseButton>
              <Box
                w="sm"
                bg={useColorModeValue("white", "gray.800")}
                shadow="2xl"
                rounded="md"
                overflow="hidden"
                position="relative"
              >
                <Image
                  w="full"
                  h={56}
                  fit="fit"
                  objectPosition="center"
                  src="/images/headshot.jpg"
                  alt="avatar"
                />{" "}
                <Flex alignItems="center" px={6} py={3} bg="gray.900">
                  {/* <Icon m="2" as={ImHeadphones} h={6} w={6} color="white" />
                  <Image id="albumArt" src={albumArt} /> */}
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
                    color={useColorModeValue("gray.700", "gray.400")}
                  >
                    Full Stack Devloper who loves working with React, CSS3, and
                    MongoDB.
                  </chakra.p>

                  <Flex
                    alignItems="center"
                    mt={4}
                    color={useColorModeValue("gray.700", "gray.200")}
                  >
                    <Icon as={GrLinkedin} as={GrLinkedin} h={6} w={6} mr={2} />

                    <chakra.h1 px={2} fontSize="sm">
                      <Link
                        target="_blank"
                        fontSize="16px"
                        href="https://www.linkedin.com/in/nick-mackenzie-5061411bb/"
                      >
                        @nick-mackenzie
                      </Link>
                    </chakra.h1>
                  </Flex>

                  <Flex
                    alignItems="center"
                    mt={4}
                    color={useColorModeValue("gray.700", "gray.200")}
                  >
                    <Icon as={DiGithubFull} h={8} w={8} mr={2} />
                    <Link
                      target="_blank"
                      href="https://github.com/nickmackenzie"
                      fontSize="16px"
                    >
                      @nickmackenzie
                    </Link>
                  </Flex>
                  <Flex
                    alignItems="center"
                    mt={4}
                    color={useColorModeValue("gray.700", "gray.200")}
                  >
                    <Icon as={GrDocumentPdf} h={6} w={6} mr={2} />

                    <chakra.h1 px={2} fontSize="sm">
                      <Link
                        fontSize="16px"
                        target="_blank"
                        href="https://github.com/nickmackenzie/resume/blob/main/pdf/NickMackenzie_Resume.pdf"
                      >
                        @resume
                      </Link>
                    </chakra.h1>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
