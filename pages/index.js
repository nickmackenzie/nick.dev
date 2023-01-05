
import Head from "next/head";
import { NextSeo } from 'next-seo';
import LandingText from "../components/landingText";
import axios from 'axios'

let projects = {
  nameMatch: {
    image: "/images/namematch.png",
    description: "A Full Stack App using MongoDB for the database and ReactJS with ChakaraUI as a front- end.This app allows users to 'like' or 'dislike' name suggestions and match with your partner.",
    liveURL: "http://name-match.herokuapp.com/",
    sourceCodeURL: "https://github.com/nickmackenzie/namematch",
    techIcons: "",
    stack: "ReactJS | NodeJS | Mongo-DB",
    name: "NameMatch",
    altText: ""
  },
  hangman: {
    image: "images/hangman.png",
    description: "A hangman game made with pure JavaScript, HTML and CSS.",
    liveURL: "https://nickmackenzie.github.io/hangman/",
    sourceCodeURL: "https://github.com/nickmackenzie/hangman",
    techIcons: "",
    stack: "HTML | CSS | JavaScript",
    name: "Don't Fall Off The Water Fall!",
  }, triviaNight: {
    image: "/images/trivia.png",
    description: "A 'live' multiplayer trivia game with live leader boards. Utilizes Django, OpenTDB API and a MySQL database.",
    liveURL: "http://trivia-night-django-app.herokuapp.com/",
    sourceCodeURL: "https://github.com/nickmackenzie/Trivia-Night",
    techIcons: "",
    stack: "Django | Python | MySQL | JavaScript",
    name: "Trivia Night"
  }, codeSave: {
    image: "images/codesave.png",
    description: "A NodeJs App using Google Authentication. It allows users to save their code 'snippets' to a cloud database. Supports over 15+ languages with automatic syntax highlighting.",
    liveURL: "https://code-save-yrek.onrender.com/",
    sourceCodeURL: "https://github.com/nickmackenzie/code-save/",
    techIcons: "",
    stack: "NodeJS | ExpressJS | MongoDB | Google Authentication API | EJS Templates",
    name: "CodeSave"
  }
}

export default function Home() {

  return (
    <div className="hero">

      <NextSeo
        title="Nick MacKenzie - Full Stack Web Developer. Ontario, Canada"
        description="Full Stack Web Developer"
        canonical="https://www.nickmackenzie.dev/"
      />
      <Head>
        <meta name="description" content="Nick MacKenzie Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" ></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" ></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      </Head>
      <div >
        <LandingText></LandingText>

      </div>
    </div>
  );
}
