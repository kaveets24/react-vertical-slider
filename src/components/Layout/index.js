import React from "react";

import "./style.scss";

// Components
import Slide from "../Slide";

const slides = [
  "Hey",
  "You're really cool",
  "Just wanted you to know that",
  "Okay",
  "See ya",
];

function Layout() {
  const renderChildren = slides.map((slide, index) => {
    return (
      <Slide
        className={`slide slide--${index + 1}`}
        id={index + 1}
        key={index + 1}
      >
        {slide}
      </Slide>
    );
  });
  return <div className="layout">{renderChildren}</div>;
}

export default Layout;
