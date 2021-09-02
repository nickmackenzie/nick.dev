import Head from "next/head";
import LandingText from "../components/landingText";

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
