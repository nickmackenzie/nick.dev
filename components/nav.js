import Link from "next/link";
import LandingText from "../components/landingText";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Center,
  Box,
} from "@chakra-ui/react";
export default function Nav() {
  return (
    <Center>
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList>
          <Tab>Home</Tab>
          <Tab>Projects</Tab>
          <Tab>Contact</Tab>
        </TabList>
        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel>
            <p>tw</p>
          </TabPanel>

          <TabPanel>
            <p>Contact</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
}
