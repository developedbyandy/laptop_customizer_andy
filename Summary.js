import React from "react";

export default function Summary(props) {
  return (
    <div className="summary__option">
      <div className="summary__option__label">{props.feature} </div>
      <div className="summary__option__value">{props.option}</div>
      <div className="summary__option__cost">
        {props.dollarFormat.format(props.cost)}
      </div>
    </div>
  );
}