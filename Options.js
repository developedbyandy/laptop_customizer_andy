import React from "react";

export default function Feature(props) {
  return (
    <div className="feature__item">
      <input
        type="radio"
        id={props.name}
        className="feature__option"
        name={props.feature}
        checked={props.name === props.selected[props.feature].name}
        onChange={() => props.handleUpdate(props.feature, props.index)}
      />
      <label htmlFor={props.name} className="feature__label">
        {props.name} ({props.dollarFormat.format(props.cost)})
      </label>
    </div>
  );
}