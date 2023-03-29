import React from "react";

function Button(props) {
  const handleClick = () => {
    // Add 1 to the existing click count
    const newCount = props.clickCount + 1;
    // Set clickCount to that new value
    props.setClickCount(newCount);
    console.log("this button was clicked");
  };
  return <button onClick={handleClick}>Click Me!</button>;
}

export default Button;
