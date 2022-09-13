import React, { useState } from "react";

const InputChange = () => {
  const [inputVal, setInputVal] = useState(null);

  function inputChangeVal(e) {
    var val = e.target.value;

    if (val.charAt(0) !== " ") {
      e.target.value = val.charAt(0).toUpperCase() + val.slice(1);
      console.log(555);
    } else {
      e.target.value = "";
    }

    setInputVal(val);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Type here ..."
        style={{ margin: "50px 20%", padding: "15px", fontSize: "20px" }}
        onChange={inputChangeVal}
      />

      <div style={{ margin: "50px 20%", padding: "15px", display: 'flex', alignItems: 'center'}} >
        <h1 style={{fontSize: '20px', fontWeight: '500', margin: '0 10px'}}>Input value:</h1>
        <p style={{fontSize: '20px', fontWeight: '500', margin: '0 10px'}}>
          {inputVal}
        </p>
      </div>
    </div>
  );
};

export default InputChange;
