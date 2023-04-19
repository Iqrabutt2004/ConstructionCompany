import React from "react";
import "./input.css";

function InputField(props) {
  return (
    <div>
      <div className="input-row">
        <div className="input-column">
          <label className="label">{props.label1}</label>
          <br />
          <input
            className="input"
            type={props.type1}
            placeholder={props.text1}
          />
        </div>
        <div className="input-column">
          <label className="label">{props.label2}</label>
          <br />
          <input
            className="input"
            type={props.type2}
            placeholder={props.text2}
          />
        </div>
      </div>
      <div className="comment-row">
        <label className="label">{props.label3}</label>
        <br />
        <input
          className="comment-input"
          type={props.type3}
          placeholder={props.text3}
        />
      </div>
    </div>
  );
}

export default InputField;
