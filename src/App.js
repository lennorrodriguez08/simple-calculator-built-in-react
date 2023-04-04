import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  let inputRef = useRef(0); 
  let resultRef = useRef(0); 
  let [result, setResult] = useState(0); 
 
  function plus(e) { 
    // Add the code for the plus function 
    e.preventDefault(); 
    setResult(result + Number(inputRef.current.value));
   
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault(); 
    setResult(result - Number(inputRef.current.value));
   
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault(); 
    setResult(result * Number(inputRef.current.value));
    inputRef.current.value = ''
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault(); 
    setResult(result / Number(inputRef.current.value));
    
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault(); 
    inputRef.current.value = ''
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    setResult(result = 0)
    e.preventDefault(); 
  }; 
 
  return ( 
    <div className="App"> 
      <div>
        <h1>Basic Working Calculator</h1> 
      </div> 
      <form> 
        <h2 ref={resultRef}> 
          {result} 
        </h2> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Subtract</button> 
        <button onClick={times}>Multiply</button> 
        <button onClick={divide}>Divide</button> 
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset Result</button> 
        
      </form> 
    </div> 
  ); 
} 
 
export default App; 
