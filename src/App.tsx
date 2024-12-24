import { useState } from "react";

let name = "Ahmed";

function App() {
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
