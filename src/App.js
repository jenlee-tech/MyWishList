import "./App.css";
import data from "./data.js";
import AddGift from "./components/AddGift.js";
import GiftList from "./components/GiftList.js";
import HeaderBar from "./components/HeaderBar.js";
import React, { useState } from "react";

function App() {
  const [gifts, setGifts] = useState(data);
  console.log("this is what gifts is holding:", gifts);

  //Add a gift from the form submission
  const addGiftToList = (gift) => {
    console.log(gift);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newGift = { id, ...gift };
    setGifts([...gifts, newGift]);
    //this combines the array and the object together.
  };

  return (
    <div>
      <HeaderBar />
      <AddGift onAdd={addGiftToList} />
      <GiftList gifts={gifts} />
    </div>
  );
}

export default App;
