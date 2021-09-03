import Head from "next/head";
import { NextSeo } from 'next-seo';
import LandingText from "../components/landingText";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Nick MacKenzie - Web Developer. Ontario, Canada"
        description="Web Developer - Specializing In React and All Things JavaScript."
        canonical="https://www.nickmackenzie.dev/"

      />
      <Head>
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
