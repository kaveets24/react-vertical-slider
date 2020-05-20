import React from "react";

import "./style.scss";

function Links(props) {
  const renderLinks = props.slides.map((link, index) => {
    let id = index + 1;
    return <a class="link" href={`#${id}`}>{ id }</a>;
  });
  return <div class="links">{ renderLinks }</div>;
}

export default Links;
