import React, { useState, useRef, useEffect } from "react";
import cx from "classnames";
import { isMobile } from "react-device-detect";

import Header from "./Header";

import "./index.css";

const About = () => {
  const [typed, setTyped] = useState([]);
  const [keyPress, setKeyPress] = useState("");
  const [isTypingEnd, setIsTypingEnd] = useState(false);

  const aboutRef = useRef();

  useEffect(() => {
    aboutRef.current.focus();
  }, []);

  const texts = Array.from("<AboutMe>");
  const typeTexts = [...texts, "Enter"];

  texts.push("</AboutMe>");

  const _handleKeyPress = (event) => {
    if (
      typeTexts.includes(event.key) &&
      typeTexts.indexOf(event.key) === typed.length &&
      !typed.includes(event.key)
    ) {
      setKeyPress(event.key);
      setTyped([...typed, event.key]);

      if (event.key === "Enter") setIsTypingEnd(true);
    }
  };

  const isShowContent = isTypingEnd || isMobile;

  return (
    <div
      className="main align-screen--vertical-centered font-primary"
      id="main_about"
      ref={aboutRef}
      tabIndex="0"
      onKeyDown={_handleKeyPress}
    >
      {isMobile && (
        <div className="about-info">
          open in desktop to get full experience 🤪
        </div>
      )}

      <div className="about">
        <div className="about-header">
          {isShowContent ? (
            "<AboutMe>"
          ) : (
            <Header texts={texts} keyPress={keyPress} />
          )}
        </div>
        <div className={cx("about-content", isShowContent ? "show" : "hide")}>
          <div>
            Hi, I'm Salisa Cheawcharnthong, Software Engineer, currently working
            at Bangkok TH.
          </div>
          <br />
          <div>
            Ability to think through a problem with the confidence to make a
            decision. Well-organized, positive, tolerant, and practical person.
          </div>
          <br />
          <div>
            Enthusiastic to take on new and challenge things to gain more future
            knowledge.
          </div>
        </div>
        <div className="about-header">{isShowContent && "</AboutMe>"}</div>
      </div>
    </div>
  );
};

export default About;
