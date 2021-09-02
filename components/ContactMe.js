import React, { useState } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Icon,
  Image,
  Center,
  Link,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { GrLinkedin, GrDocumentPdf } from "react-icons/gr";
import { DiGithubFull } from "react-icons/di";

export default function ContactMe() {
  const btnRef = React.useRef();
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <Button
        as="a"
        ref={btnRef}
        colorScheme="blue"
        onClick={onOpenModal}
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
      <Modal
        open={open}
        focusTrapped={false}
        onClose={onCloseModal}
        showCloseIcon={false}
        center
      >
        <Flex w="xs" alignItems="center">
          <Box rounded="md">
            <Image
              rounded="lg"
              fit="fit"
              src="/images/headshot.jpg"
              alt="avatar"
              priority={true}
            />{" "}
            <Box py={4} px={6}>
              <chakra.h1
                fontSize="1rem"
                fontWeight="bold"
                color={useColorModeValue("gray.800", "white")}
              >
                Nick MacKenzie
              </chakra.h1>

              <chakra.p
                py={2}
                fontSize=".9rem"
                color={useColorModeValue("gray.700", "gray.400")}
              >
                Full Stack maker & UI / UX Designer.
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
              <Center>
                <Button colorScheme={"blue"} m="2" onClick={onCloseModal}>
                  Close
                </Button>
              </Center>
            </Box>
          </Box>
        </Flex>
      </Modal>
    </>
  );
}
