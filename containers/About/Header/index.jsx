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
        display: "flex"
      }}
    >
      {["", ...texts].map((letter, index) => (
        <>
          <Frame
            key={index}
            width={"auto"}
            height={"2rem"}
            background={""}
            style={{ position: "relative" }}
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
            {letter}
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
                initial={"hidden"}
                animate={keyPress === letter && "show"}
                variants={{
                  hidden: {
                    background: "#fff",
                    opacity: 0,
                  },
                  show: {
                    opacity: 0.2,
                  },
                }}
                transition={{
                  duration: 0.5,
                  loop: Infinity,
                }}
              >
                <div
                  className={`cursor_placeholder cursor_placeholder-${index}`}
                >
                  <ArrowIcon />
                  <div>
                    {letter === ">" ? "Press Enter!" : "Type this"}
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
