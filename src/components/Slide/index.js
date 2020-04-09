import React from "react";

import "./style.scss";

function Slide(props) {
  return (
    <div id={props.id} key={props.key} className={props.className}>
      {props.children}
    </div>
  );
}

export default Slide;
