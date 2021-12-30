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

  const [visibleGiftList, onList] = useState(true);
  const showList = () => {
    onList(!visibleGiftList); //this is the opposite of visibleGiftList, this function will be passed in props
  };

  return (
    <div>
      <HeaderBar showList={showList} />
      {/**conditional rendering of this AddGift component based on the change of state caused by HeaderBar component */}
      {visibleGiftList ? <AddGift onAdd={addGiftToList} /> : null}
      <GiftList gifts={gifts} />
    </div>
  );
}

export default App;
