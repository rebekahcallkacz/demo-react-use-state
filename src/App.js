import { useState } from "react";

function App() {
  const [clickCount, setClickCount] = useState(0);
  // What if we wanted to keep track of how many times the button was clicked?
  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    console.log("this button was clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p>{`This button was clicked ${clickCount} times.`}</p>
    </div>
  );
}

export default App;
