import React, { useState, useEffect } from 'react';
import Wrappedbottom from './Wrappedbottom';
import './styles/wrapper-bottom.css'
import './styles/navbar.css'




function WrapperBottom() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  }

  return (
    <div>
      {showComponent && <Wrappedbottom />}
    </div>
  );
}

export default WrapperBottom;
