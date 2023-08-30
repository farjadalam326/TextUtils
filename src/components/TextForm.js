import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleResetText = ()=>{
    let newText = '';
    setText(newText)
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
  }
  const [text, setText] = useState("Enter the text here");
  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
        <div className="mb-3">
        {/* <label for="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className= "btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className= "btn btn-primary mx-4" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className= "btn btn-primary mx-0" onClick={handleResetText}>Reset Text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-4">Speak</button>
    </div>
    <div className="container my-4">
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <i><p>{text}</p></i>

    </div>
    </>
  )
}
