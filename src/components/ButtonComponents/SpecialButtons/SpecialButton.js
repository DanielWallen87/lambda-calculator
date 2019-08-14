import React, { useState } from "react";
// import react and use state so we can change based on input

import { specials } from "../../../data";
// import special characters so they can be used on button

const SpecialButton = (props) => {
  return (
    //use fragments to group our JSX together
    <>
    {/*Create button element on which to place prop text*/}
      <button>
        {props.text}
      </button>
    </>
  );
};

// export button so it can be used elsewhere in app

export default SpecialButton;