import React, { useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router';
import '../stylesheets/SearchBar.css'



  type SomeComponentProps = RouteComponentProps;

  const SearchBar: React.FC<SomeComponentProps> = ({ history }) => {
    const [term, setTerm] = useState("");


   const termHandler = (event: any )=>{
    event.preventDefault();
    history.push(`/search/${term}`);
   }




    return (
        <div>
          <form className="searchbar" onSubmit={termHandler}>
          <label>Image Search</label>
          <input
            value={term}
            type="text" 
            placeholder="Search high-resolution photos"
            className="form-input"
            onChange={(e)=> setTerm(e.target.value)}
            />
            <i className="fa fa-camera-retro mt-1" onClick={(e)=> termHandler(e)}></i>
          </form>
        </div>
    )
}

export default withRouter(SearchBar);

