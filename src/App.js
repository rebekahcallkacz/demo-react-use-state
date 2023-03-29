import { useState } from "react";
import Button from "./Button";

function App() {
  // Manage the state of the click count (default value is 0 on initial render)
  // needs to be defined here because we need access to it for the <p> element
  const [clickCount, setClickCount] = useState(0);

  return (
    <div>
      <Button clickCount={clickCount} setClickCount={setClickCount}>
        Click Me!
      </Button>
      <p>{`This button was clicked ${clickCount} times.`}</p>
    </div>
  );
}

export default App;
