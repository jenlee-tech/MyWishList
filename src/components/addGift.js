import React, { useState } from 'react';

function handleSubmit(e) {
    e.preventDefault();
    console.log("The submit button got clicked!  What happen?")
  }


const AddGift = () => {

return (
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
    )
}

export default AddGift;