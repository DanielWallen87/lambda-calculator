import React, { useState } from "react";
import { numbers } from "../../../data.js";

const NumberButton = (props) => {

  return (
    <div class="NumbersContainer">          {/*fragments are used to group up our JSX * -- also note weird comment syntax*/}
      <button className="Numbers" onClick={() => props.addNumber(props.text)}>
        {props.text}
      </button>
    </div>
  );
};

// export button so it can be used elsewhere in app

export default NumberButton;

