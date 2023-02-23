import React from 'react';
import './styles/wrapped.css'


const Wrapped = () => {

    return (
      
        <>
        <div className='video'>
         <div>
       <p>Video of the week: Arctic</p> 
         <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OfO6zxvhtBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>
         </div> 
         </>
    );
  };

  export default Wrapped;