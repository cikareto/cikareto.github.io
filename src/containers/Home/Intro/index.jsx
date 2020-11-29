import { Frame } from "framer";

import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  MediumIcon,
} from "../../../icons";

import "./intro.css";

const Intro = () => {
  // Add staggering effect to the children of the container
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  };

  // Variants for animating each letter
  const letterVariants = {
    before: {
      color: "#2BE2FF",
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      color: "#fff",
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  };

  const jumpText = (index, letter) => (
    <Frame
      key={index}
      width={"auto"} // Set the width to the width of the letter
      background={""}
      style={{ position: "relative" }} // Position elements
      variants={letterVariants}
      whileHover={{ scale: 1.1, color: "#2BE2FF" }}
      whileTap={{ scale: 0.8 }}
    >
      {letter === " " ? "\u00A0" : letter}
    </Frame>
  );

  const renderSocial = (social, link, icon) => (
    <Frame
      background={""}
      style={{ position: "relative" }} // Position elements
      variants={letterVariants}
      whileHover={{ scale: 1.2 }}
    >
      <a
        role="button"
        aria-label={social}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
      </a>
    </Frame>
  );

  return (
    <div className="main intro align-screen--vertical-centered">
      <Frame
        background={""}
        style={{
          display: "flex", // Set the display value to flex
          flexDirection: "column",
          height: "auto",
          paddingBottom: "5rem",
        }}
        variants={containerVariants}
        initial={"before"}
        animate={"after"}
      >
        <div className="container intro-greeting font-header">
          {["H", "i", ","].map((letter, index) => jumpText(index, letter))}
        </div>
        <div className="container intro-introduce font-header">
          {Array.from(
            "My name is Salisa Cheawcharnthong"
          ).map((letter, index) => jumpText(index, letter))}
        </div>
        <div className="container intro-role font-primary">
          {jumpText(0, "<> Software Engineer </>")}
        </div>
        <div className="intro-socials">
          {renderSocial(
            "twitter",
            "https://twitter.com/cikareto_",
            <TwitterIcon />
          )}
          {renderSocial(
            "github",
            "https://github.com/cikareto",
            <GithubIcon />
          )}
          {renderSocial(
            "linkedin",
            "https://www.linkedin.com/in/salisa-cct/",
            <LinkedInIcon />
          )}
          {renderSocial(
            "medium",
            "https://medium.com/@salisa.cct",
            <MediumIcon />
          )}
        </div>
      </Frame>
    </div>
  );
};

export default Intro;
