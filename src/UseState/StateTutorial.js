import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("useState");

  let onChange = (event) => {
    let newDataUpdate = event.target.value;
    setInputValue(newDataUpdate);
  };

  return (
    <div>
      <input placeholder="Enter Something to check" onChange={onChange} />
      <p>{inputValue}</p>
    </div>
  );
};

// const StateTutorial = () => {
//   let [counter, setCounter] = useState(1);

//   let increment = () => {
//     setCounter(counter + 1);
//   };
//   return (
//     <div>
//       <p>This is the current count: {counter}</p>
//       <button onClick={increment}>Increment Counter</button>
//     </div>
//   );
// };

export default StateTutorial;
