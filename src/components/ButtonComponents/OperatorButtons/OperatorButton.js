import React, {useState} from "react";
import { operators } from "../../../data";

const OperatorButton = (props) => {
  return (
    <>
      <button className="Operators"> 
        
        {props.symbols.char}

        {/*  */}

      </button>
    </>
  )
}

export default OperatorButton;

// const OperatorButton = () => {
//   return (
//     <>
//       {/* Display a button element rendering the data being passed down from the parent container on props */
//         <button className="OperatorButton"></button>
//       }
//     </>
//   );
// };

// export default OperatorButton;