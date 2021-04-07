import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { key } from '../unsplashKey';
import Spinner from './Helpers/Spinner';
import '../stylesheets/Home.css'
import axios from 'axios';


 type SearchParams = {
    id: string; 
  };

  type SearchProps = RouteComponentProps<SearchParams>;  


const Search: React.FC<SearchProps> = ({ match }) => {
    const [termImages, setTermImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const term = match.params.id;

    const fetchSearchTermPhotos = async()=>{
        setLoading(true);
        const {data} = await axios.get('https://api.unsplash.com/search/photos?', {
        params:{
          query: term,
          client_id: key,
          per_page: 24
        }
      });
      setTermImages(data.results);
      setLoading(false);
    }


    useEffect(()=>{
     fetchSearchTermPhotos();
    },[term])


    const renderTermImages = ()=>{
        if(termImages){
           return termImages.map((image:any)=>{
               return( 
               <div className="hover_img" key={image.id}>
                 <div>
                 <a href={`https://unsplash.com/@${image.user.username}`} target="_blank" className="photographer" rel="noopener noreferrer">
                 By {image.user.username}</a>
                 <a href={image.links.download} target="_blank" className="download-img" rel="noopener noreferrer">Download</a>
                 <img className="grid-item col-sm" src={image.urls.regular} alt={image.alt_description} />
               </div>
             </div>
               )        
            })
        }else{
            setLoading(true);
        }
     }




    return (
        <>
        <div className="randomPhotosGrid mt-5 container">
            {loading && <span className="m-auto"><Spinner /> </span> }
          {renderTermImages()}
        </div>
      </>
    )
}

export default withRouter(Search);
