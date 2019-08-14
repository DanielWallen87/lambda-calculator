import React, {useState} from "react";

// //import any components needed
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

// //Import your array data to from the provided data file

const Specials = (props) => {
  // add the imported data to state
  const [buttonSpecials, setButtonSpecials] = useState(specials);

  return (
    <div>
      {buttonSpecials.map(special => <SpecialButton text={special}/>)}
      <SpecialButton />
    </div>
  );
};

// export this data so it can be used elsewhere in the app

export default Specials;