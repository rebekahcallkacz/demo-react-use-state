import React from "react";

function App() {
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
