import { useState } from "react";

let name = "Ahmed";

function handleSomthing() {
  console.log("hello world");
}

function changeByHozifa(){
}

function App() {
  // any code
  // jnsnjk
  console.log("render");
  const [value, setValue] = useState("Ahmed");

  function buttonClicked() {
    if (name == "Yarob") {
      setValue("Ahmed");
    } else {
      setValue("Yarob");
    }
  }

  return (
    <div>
      <button onClick={buttonClicked}>Click Me</button>
      <h1>{value}</h1>
    </div>
  );
}

export default App;
