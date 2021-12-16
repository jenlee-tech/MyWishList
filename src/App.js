import './App.css';
import data from './data.js';
import AddGift from './components/AddGift.js';
import React, { useState } from 'react';




//I want to close the form here with this function.
function handleClose(e) {
    console.log("I clicked the close button and also to remove the addGift component")
}

//Add a gift from the form submission
const addGiftToList = (gift) => {
  console.log(gift)

}



function App() {
  const [datainfo, setData] = useState(data);
  console.log("this is datainfo:", datainfo); 
  
  const [style, setStyle] = useState("");
  //Changing the style of a button here:
  const changeButtonStyle = () => {
    console.log("just clicked the change style function");
    setStyle(style === "" ? "active" : "");
  }

  const [buttonText, setButtonText] = useState("Close");
  //this is to change the text on the button upon click
  const changeTextButton = () => {
    setButtonText(buttonText === "Close" ? "Add Gift" : "Close")
  }

  
 

  return ( 
    <div>
        <div>
          <h1> My Wishlist </h1> 
          <button className = {`styleButton ${style}`} onClick = { () => 
              {
              changeButtonStyle();
              changeTextButton();
              }
            }>{buttonText}
          </button>
        </div>

        <AddGift onAdd = {addGiftToList} />

        <ul>
          {datainfo.map((item) => (
          <li key = {item.id}>{item.name}</li>
          ))}
        </ul>


    </div>
    );
}

export default App;