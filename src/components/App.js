import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [inputData,setInputData] = useState(0);
  const [selectFromFactor,setSelectFromFactor] = useState(1);
  const [selectToFactor,setSelectToFactor] = useState(1);

  
  
  function handleClickConvert(){

    if(!isNaN(inputData)){
      setResult(inputData * selectFromFactor/selectToFactor);
    }else{
      setResult(0);
    }
    
  }

  return (
    
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        
        {<Input label="Amount" onChange={e => setInputData(e.target.value)}/>}
        
        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          
          

          {<Select label="From" items={ units } onChange={e => setSelectFromFactor(e.target.value)}/>}

          {<Select label="To" items={units}  onChange={e => setSelectToFactor(e.target.value)}/>}

          <button onClick={handleClickConvert}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
