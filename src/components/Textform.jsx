import React, { useState } from 'react'
//main component where input is taken and the action corresponding to whichever button was clicked is taken
const Textform = (props) => {
    const [text, setText] = useState(''); //initially text in the textarea component is empty
    const [words, setWords] = useState(0); //initially , number of words is 0
    const [characters, setCharacters] = useState(0); //initially, number of characters are 0
    const handleChange = (event) => {
        const { value } = event.target; //get the value in the textarea
        setText(value); //and set text to that value
        let str = text;
        let arr = value.split(/\s+/).filter(word => word.length > 0); //split the string s into an array of one or more substrings whenever you encounter any whitespace characters(spaces,newlines,tabs,etc).
        console.log(str);
        console.log(arr);
        if (value.trim === '') {//this removes any empty spaces and if it is an empty string ''
            setCharacters(0); //then set the number of characters and the number of words to 0
            setWords(0);
        }
        else {
            setWords(arr.length); //else set the number of words to length of the array
            setCharacters(value.length); //set the number of characters too
        }

    }
    const handleClick = (event) => {
        const { id } = event.target;
        if (id === "upperCaseButton") {//means, the button to convert the text to uppercase was clicked; Hence, you need to convert the text to upper case
            setText(text.toUpperCase());
            props.showAlert('Converted to Upper Case!');
        }
        else if (id === "lowerCaseButton") {//means, the button to convert the text to lowercase was clicked; Hence, you need to convert the text to lower case
            setText(text.toLowerCase());
            props.showAlert('Converted to Lower Case!');
        }
        else if (id === "capitalizeButton") {//means, the button to capitalize the text was clicked; Hence, you need to capitalize the text
            let str = text;
            let arr = str.split(' ');//split the text based on white spaces
            let newArr = arr.map((word) => { //convert the first character of each word to upper case
                return word[0].toUpperCase() + word.slice(1);
            });
            setText(newArr.join(' '));//join the various substrings in the array with white space
            props.showAlert('Capitalized the text!');//show alert

        }
        else if (id === "listenButton") {//means, the button to listen to the text was clicked; 
            let msg = new SpeechSynthesisUtterance();//create a new SpeechSyntesisUtterance object
            msg.text = text; //specify its properties
            msg.rate = 0.7;
            msg.volume=0.9;
            window.speechSynthesis.speak(msg); //window object will read out the message
            props.showAlert('Reading out the text!');
        }
        else if(id==="removeExtraSpacesButton"){//function to remove extra spaces
            let newText=text.split(/[ ]+/); //split the string into an array of one or more substrings wherever there are  one or more space characters
            setText(newText.join(" "));//join with one space character
            props.showAlert('Removed Extra Spaces!');
        }
        else if (id === "clearButton") {//function to clear the textarea altogether
            //update text, number of characters, number of words
            setText('');
            setCharacters(0);
            setWords(0);
            props.showAlert('Text Cleared!');

        }
        else if(id==="copyButton"){ //function to copy whatever is input into the text area
            let ele=document.getElementById('myBox');
            ele.select();
            navigator.clipboard.writeText(ele.value);
            props.showAlert('Copied to Clipboard!');

        }
    }
    return (
        <div className={`textarea ${props.mode==='light'?'body-light':'body-dark'}`}>
            <div className='container my-3'>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea  className={`form-control `} style={{backgroundColor:props.mode === 'light' ? 'white' : '#212529',color:props.mode === 'light' ? 'black' : 'white'}} placeholder="Enter text here.." id="myBox" rows="10" onChange={handleChange} value={text}></textarea>
                </div>
                <div className='buttonContainer'>
                    <button disabled={words===0} id="upperCaseButton" type="button" className={`btn btn-${props.mode==='dark'?'light':'dark'}`} onClick={handleClick}>Convert to Uppercase</button>
                    <button disabled={words===0} id="lowerCaseButton" type="button" className={`btn btn-${props.mode==='dark'?'light':'dark'}`} onClick={handleClick}>Convert to Lowercase</button>
                    <button disabled={words===0} id="capitalizeButton" type="button" className={`btn btn-${props.mode==='dark'?'light':'dark'}`} onClick={handleClick}>Capitalize Text</button>
                    <button disabled={words===0} id="copyButton" type="button" className={`btn btn-${props.mode==='dark'?'light':'dark'}`} onClick={handleClick}>Copy Text</button>
                    <button disabled={words===0} id="listenButton" type="button" className={`btn btn-${props.mode==='dark'?'light':'dark'}`} onClick={handleClick}>Listen Text</button>
                    <button disabled={words===0} id="removeExtraSpacesButton" type="button" className={`btn btn-${props.mode==='dark'?'light':'dark'}`} onClick={handleClick}>Remove Extra Spaces</button>
                    <button disabled={words===0} id="clearButton" type="button" className={`btn btn-${props.mode==='dark'?'light':'dark'}`} onClick={handleClick}>Clear Text</button>
                </div>

            </div>
            <div className='container my-2'>
                <h2>Your Text Summary</h2>
                <p>{words} Words and {characters} Characters.</p>
                <p>Time to Read: {words * (1 / 125).toFixed(2)} minutes</p>
                <h3>Preview</h3>
                <p>{words> 0 ? text : "No Text to Display"}</p>
            </div>
        </div>
    )
}
Textform.defaultProps = {
    heading: "Enter your text here"
};
export default Textform;

