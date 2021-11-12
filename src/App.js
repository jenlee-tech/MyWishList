import './App.css';
import data from "./data.js";

function handleSubmit(e) {
  e.preventDefault();
  console.log("The submit button got clicked!  What happen?")
}

function handleClose(e) {
    console.log("I clicked the close button")
}


function App() {
    return ( 
    <div>
        <h1> My Wishlist </h1> 
        <button onClick = {handleClose}>Close</button>
        <form>
          <div>
            <label>Name of Gift:
              <input type="text" name="name"/>
            </label> 
          </div>

          <div>
            <label>Description:
              <input type="text" name="description"/>
            </label>
          </div>


          <div>
            <label>Link:
              <input type="url" name="link"/>
            </label>
          </div>
          
          <input type="submit" value="Add" onClick = {handleSubmit} />
        </form>



    </div>
    );
}

export default App;