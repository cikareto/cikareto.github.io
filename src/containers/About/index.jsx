import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";

import "./index.css";

const About = () => {
  const [typed, setTyped] = useState([]);
  const [keyPress, setKeyPress] = useState("");

  const aboutRef = useRef()

  useEffect(() => {
    aboutRef.current.focus()
  }, [])

  const texts = Array.from("<AboutMe");
  const typeTexts = [...texts, ">", "Enter"];

  texts.push("></AboutMe>");

  const _handleKeyPress = (event) => {
    if (
      typeTexts.includes(event.key) &&
      typeTexts.indexOf(event.key) === typed.length &&
      !typed.includes(event.key)
    ) {
      setKeyPress(event.key);
      setTyped([...typed, event.key]);
    }
  };

  return (
    <div
      className="main align-screen--vertical-centered font-primary"
      id="main_about"
      ref={aboutRef}
      tabIndex="0"
      onKeyDown={_handleKeyPress}
    >
      <div className="about">
        <div className="about-header">
          <Header texts={texts} keyPress={keyPress} />
        </div>
        <div className="about-content">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor tincidunt metus, nec pellentesque lacus tristique sit amet. Vestibulum ante ligula, molestie vitae risus eu, rutrum semper erat. Maecenas euismod nisl in mi mollis laoreet. In quis tortor dolor. Vivamus eu leo non nulla dictum porta ut ut dolor. Praesent ullamcorper efficitur fringilla. Etiam pharetra rhoncus pharetra. Aenean commodo nunc vitae neque sagittis, eu iaculis augue porttitor. Vestibulum interdum convallis metus, quis faucibus nulla accumsan vel. In hac habitasse platea dictumst. Morbi in metus ac purus efficitur luctus. Morbi porta sed velit vitae porta. Ut mattis augue arcu, id efficitur risus semper in. Morbi scelerisque ullamcorper massa, sed cursus justo dictum quis. Suspendisse in malesuada ipsum."
          }
        </div>
      </div>
    </div>
  );
};

export default About;
