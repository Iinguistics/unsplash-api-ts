import React, { useState } from 'react'
//import { History } from 'history'
import '../stylesheets/SearchBar.css'



  // interface Props{
  //   history: History;
  // }

  const SearchBar: React.FC = () => {
    const [term, setTerm] = useState("");


   const termHandler = (event:any)=>{
    event.preventDefault();
    //console.log()
   }


   



    return (
        <div>
          <form className="searchbar" onSubmit={ termHandler}>
          <label>Image Search</label>
          <input
            value={term}
            type="text" 
            placeholder="Search high-resolution photos"
            className="form-input"
            onChange={(e)=> setTerm(e.target.value)}
            />
            <i className="fa fa-camera-retro mt-1"></i>
        </form>
            
        </div>
    )
}

export default SearchBar

