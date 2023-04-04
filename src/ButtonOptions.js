import React from "react";
import Button from "./Button";

function ButtonOptions(props) {

  return (<div>
    {props.options.map(option => 
        <Button
            key={option.value}
            clickCount={props.clickCount}
            setClickCount={props.setClickCount}
            label={option.label}
        />
    )}
  </div>);
}

export default ButtonOptions;