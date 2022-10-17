import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = ""
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra space", "success");

  };
  const handleOnChange = (event) => {
    //console.log("handle on change");
    setText(event.target.value);
  };
  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Reversed text", "success");
  };
  const [text, setText] = useState("");
  //text="kishan" //wrong way to change state
  //setText("kishan") //correct way to change state
  return (
    <> 
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
        style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'0#42743'}}
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick}>
        Convert To lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleReverse}>
        Reverse
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'0#42743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something in textbox"}</p>
    </div>
    </>
  );
}
