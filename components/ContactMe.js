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

              src="/images/headshot.webp"
              alt="Nick Mackenzie - A Striking Young Man"
              placeholder="blur"
              width="auto"
              height='auto'
              blurDataURL={"data:image/png;base64,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"}
            />
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
                Full Stack Developer

                I am a recent General Assembly graduate from the Software Engineering Immersive program. This has given me the knowledge to be proficient in JavaScript, HTML and CSS. I am a meticulous, driven, and creative thinker who has worked professionally in both team and independent settings for the last ten years.
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
