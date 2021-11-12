import './App.css';
import data from "./data.js";

function handleSubmit(e) {
  e.preventDefault();
  console.log("I got clicked!")
}



function App() {
    return ( 
    <div>
        <header>
          <h1> My Wishlist </h1> <button>Close</button>
        </header>
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

        <ul>
          {data.map((item) => (
          <li key = {item.id}>{item.name}</li>
          ))}
        </ul>


    </div>
    );
}

export default App;