import Head from "next/head";
import Image from "next/image";

import LandingText from "../components/landingText";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Nav from "../components/nav";
import Slider from "../components/slider";
import Project from "../components/project";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nick MacKenzie - Web Developer. Ontario, Canada</title>
        <meta name="description" content="Nick MacKenzie Portfolios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Image
        src="/bg.png"
        layout="fill"
        height="100"
        width="100"
        objectFit="contain"
        objectPosition="center"
      ></Image> */}
      <div>
        {" "}
        <LandingText></LandingText>
      </div>
    </div>
  );
}
