import React, {useState} from "react";

//import any components needed
import { numbers } from "../../../data";
import NumberButton from "./NumberButton.js";

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers, setButtonNumbers] = useState(numbers);

  return (
    <div>
      {buttonNumbers.map(number => <NumberButton text={number}
      addNumber={props.addNumber}/>)} {/*Text is the prop used to pass number from array*/}
      <NumberButton />
    </div>
  );
};

export default Numbers;