import React, { useState } from "react";
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
  CloseButton,
} from "@chakra-ui/react";
import { MdHeadset, MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { DiGithubAlt } from "react-icons/di";
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
            <Flex alignItems="center">
              <Box
                w="sm"
                bg={useColorModeValue("white", "gray.800")}
                shadow="2xl"
                rounded="md"
                overflow="hidden"
                position="relative"
              >
                <CloseButton
                  position="absolute"
                  color="white"
                  background="black"
                  onClick={onClose}
                ></CloseButton>
                <Image
                  w="full"
                  h={56}
                  fit="fit"
                  objectPosition="center"
                  src="/images/headshot.jpg"
                  alt="avatar"
                />{" "}
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
                    <Icon as={GrLinkedin} as={GrLinkedin} h={6} w={6} mr={2} />

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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
