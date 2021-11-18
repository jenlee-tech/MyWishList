import './App.css';
import data from './data.js';
import React, { useState } from 'react';




function handleSubmit(e) {
  e.preventDefault();
  console.log("The submit button got clicked!  What happen?")
}

function handleClose(e) {
    console.log("I clicked the close button")
}


function App() {
  const [datainfo, setData] = useState(data);
  console.log("this is datainfo:", datainfo); 
  //console.log({datainfo})  
    

  return ( 
    <div>
        <h1> My Wishlist </h1> 
        <button onClick = {handleClose}>Close</button>
        <form>
          <div>
            <label>Name of Gift:   </label> 
              <input type="text" name="name" placeholder="Name of Gift" />
         
          </div>

          <div>
            <label>Description:</label>
              <input type="text" name="description" placeholder="description" />
            
          </div>


          <div>
            <label>Link:</label>
              <input type="url" name="link" placeholder= "Link" />
            
          </div>
          
          <input type="submit" value="Add Gift" onClick = {handleSubmit} />
        </form>


        <ul>
          {datainfo.map((item) => (
          <li key = {item.id}>{item.name}</li>
          ))}
        </ul>


    </div>
    );
}

export default App;