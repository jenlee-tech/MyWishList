import React, { useState } from 'react';

function handleSubmit(e) {
    e.preventDefault();
    //console.log("The submit button got clicked!  What happen?")


  }


const AddGift = () => {
    const [name, setName] = useState('')
    const [descrip, setDescrip] = useState('')
    const [link, setLink] = useState('')


return (
        <form>
        <div>
        <label>Name of Gift:   </label> 
            <input 
                type="text" 
                name={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name of Gift" />

        </div>

        <div>
        <label>Description:</label>
            <input 
                type="text" 
                name={descrip} 
                onChange={(e) => setDescrip(e.target.value)} placeholder="description" />
        </div>


        <div>
        <label>Link:</label>
            <input 
                type="url" 
                name={link} 
                onChange={(e) => {setLink(e.target.value)}} 
                placeholder= "Link"
                />
        </div>
            <input type="submit" value="Add Gift" onClick = {handleSubmit} />
        </form>
    )
}

export default AddGift;