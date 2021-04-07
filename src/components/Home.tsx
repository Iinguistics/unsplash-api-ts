import React, { useEffect, useState } from 'react';
import { key } from '../unsplashKey';
import axios from 'axios';
import Spinner from './Helpers/Spinner';
import '../stylesheets/Home.css'

const Home: React.FC = () => {
    const [randomImages, setRandomImages] = useState([]);

    
    const fetchRandomImages = async()=>{
        const { data } = await axios.get('https://api.unsplash.com/photos', {
        params:{
          client_id: key,
          per_page: 24
        }
      });
      setRandomImages(data);
      console.log(data)
    }

    useEffect(()=>{
    fetchRandomImages();
    }, []);


    const renderRandomImages = ()=>{
       if(randomImages){
          return randomImages.map((image:any)=>{
              return( 
            
              <div className="hover_img">
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
           return <Spinner />
       }
    }
     

    return (
        <>
        
        <div className="randomPhotosGrid mt-5 container">
          {renderRandomImages()}
        </div>

      </>
    )
}

export default Home
