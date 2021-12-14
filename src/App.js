import './App.css';
import data from './data.js';
import AddGift from './components/AddGift.js';
import React, { useState } from 'react';





function handleClose(e) {
    console.log("I clicked the close button")
}


function App() {
  const [datainfo, setData] = useState(data);
  console.log("this is datainfo:", datainfo); 
  //console.log({datainfo})  
    

  return ( 
    <div>
        <div>
          <h1> My Wishlist </h1> 
          <button onClick = {handleClose}>Close</button>
        </div>

        <AddGift />

        <ul>
          {datainfo.map((item) => (
          <li key = {item.id}>{item.name}</li>
          ))}
        </ul>


    </div>
    );
}

export default App;