import React, { useState } from 'react';

function handleSubmit(e) {
    e.preventDefault();
    console.log("The submit button got clicked!  What happen?")


  }


 

const AddGift = ({onAdd}) => {
    const [name, setName] = useState('')
    const [descrip, setDescrip] = useState('')
    const [link, setLink] = useState('')

const onSubmit = (e) => {
    e.preventDefault();

    //validation later
    if(!name) {
        alert("please put in a name for the gift");
        return;
    }

    if (!link) {
        alert("please put in a url for the gift")
        return;
    }

    onAdd({name, descrip, link})

    setName('');
    setDescrip('')
    setLink('')

} 


return (
        <form onSubmit = {onSubmit}>
        <div>
        <label>Name of Gift:</label> 
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
            <input type="submit" value="Save Gift" />
        </form>
    )
}

export default AddGift;