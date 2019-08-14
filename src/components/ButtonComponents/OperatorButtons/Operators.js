import React, { useState } from "react";

//import any components needed
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton.js";

// //Import your array data to from the provided data file

const Operators = () => {
  const [operatorButtons, setOperatorButtons] = useState(operators);

  return (
    <div>
    
    {operatorButtons.map(operator => <OperatorButton symbols={operator}/>)}

    {/* "Symbols" may be transferred as a "prop" to the 
  button component */}
    
    </div>
  );

};

export default Operators;