import { useState } from "react";
import ButtonOptions from "./ButtonOptions";

const options = [
  { label: "Akela the dog", value: "Akela"},
  { label: "Peaches the cat", value: "Peaches"},
  { label: "Oscar the guinea pig", value: "Oscar"},
  { label: "Thumper the rabbit", value: "Thumper"},
];

function App() {
  // Manage the state of the click count (default value is 0 on initial render)
  // needs to be defined here because we need access to it for the <p> element
  const [clickCount, setClickCount] = useState(0);

  return (
    <div>
      <ButtonOptions options={options} clickCount={clickCount} setClickCount={setClickCount}/>
      <p>{`This button was clicked ${clickCount} times.`}</p>
    </div>
  );
}

export default App;

