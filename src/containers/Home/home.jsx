import { Frame } from "framer";

import { TwitterIcon, GithubIcon, LinkedInIcon, MediumIcon } from "../../icons";

import "./home.css";

const Home = () => {
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

  const renderSocial = (link, icon) => (
    <Frame
      background={""}
      style={{ position: "relative" }} // Position elements
      variants={letterVariants}
      whileHover={{ scale: 1.2 }}
    >
      <a href={link} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </Frame>
  );

  return (
    <div className="home align-screen--vertical-centered">
      <Frame
        background={""}
        style={{
          display: "flex", // Set the display value to flex
          flexDirection: "column",
          height: "auto",
          "padding-bottom": "5rem",
        }}
        variants={containerVariants}
        initial={"before"}
        animate={"after"}
      >
        <div className="container home-greeting font-header">
          {["H", "i", ","].map((letter, index) => jumpText(index, letter))}
        </div>
        <div className="container home-introduce font-header">
          {Array.from(
            "My name is Salisa Cheawcharnthong"
          ).map((letter, index) => jumpText(index, letter))}
        </div>
        <div className="container home-role font-primary">
          {jumpText(0, "<> Software Engineer </>")}
        </div>
        <div className="home-socials">
          {renderSocial("https://twitter.com/cikareto_", <TwitterIcon />)}
          {renderSocial("https://github.com/cikareto", <GithubIcon />)}
          {renderSocial(
            "https://www.linkedin.com/in/salisa-cct/",
            <LinkedInIcon />
          )}
          {renderSocial("https://medium.com/@salisa.cct", <MediumIcon />)}
        </div>
      </Frame>
    </div>
  );
};

export default Home;
