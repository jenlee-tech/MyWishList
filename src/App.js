import './App.css';
import data from './data.js';
import AddGift from './components/AddGift.js';
import React, { useState } from 'react';










function App() {
  const [gifts, setGifts] = useState(data);
  console.log("this is what gifts is holding:", gifts); 

//Add a gift from the form submission
const addGiftToList = (gift) => {
  console.log(gift)
  const id = Math.floor(Math.random() * 10000) + 1;
  const newGift = {id, ...gift};
  setGifts([...gifts, newGift])
  //this combines the array and the object together.
}





  
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
          {gifts.map((item) => (
          <li key = {item.id}>{item.name}</li>
          ))}
        </ul>


    </div>
    );
}

export default App;