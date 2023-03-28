import React from "react";

function App() {
  // What if we wanted to keep track of how many times the button was clicked?
  const handleClick = () => {
    console.log("this button was clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;
