import React from "react";
import { Frame } from "framer";
import { ArrowIcon } from "../../../icons";

import "./header.css";

const Header = ({ texts, keyPress }) => {
  const isAnimated = (index, letter) =>
    (index === texts.length && keyPress === ">") || keyPress === letter;

  return (
    <div
      style={{
        display: "flex", // Set the display value to flex
      }}
    >
      {['', ...texts].map((letter, index) => (
        <>
          <Frame
            key={index}
            width={"auto"} // Set the width to the width of the letter
            height={"2rem"}
            background={""}
            style={{ position: "relative" }} // Position elements
            initial={"before"}
            animate={isAnimated(index, letter) && "after"}
            variants={{
              before: {
                color: "#fff",
                opacity: 0.1,
              },
              after: {
                opacity: 1,
                background: "none",
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 300,
                },
              },
            }}
          >
            {letter === " " ? "\u00A0" : letter}
            {isAnimated(index, letter) && (
              <Frame
                key={`cursor-${index}`}
                width={"1.25rem"}
                height={"2rem"}
                background={""}
                style={{
                  display: "inline-block",
                  position: "absolute",
                }}
                initial={"active"}
                animate={isAnimated(index, letter) && "active"}
                variants={{
                  active: {
                    background: "#fff",
                    opacity: 0.2,
                  },
                }}
              >
                <div
                  className={`cursor_placeholder cursor_placeholder-${index}`}
                >
                  <ArrowIcon />
                  <div>
                    {letter === "></AboutMe>" ? "Press Enter!" : "Type this"}
                  </div>
                </div>
              </Frame>
            )}
          </Frame>
        </>
      ))}
    </div>
  );
};

export default Header;
