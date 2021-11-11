import './App.css';

function handleSubmit(e) {
  e.preventDefault();
  console.log("I got clicked!")
}



function App() {
    return ( 
    <div>
        <h1> My Wishlist </h1> 
        <button>Close</button>
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