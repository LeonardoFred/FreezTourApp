import React, { useState, useEffect } from 'react';
import Wrapped from './Wrapped';
import './styles/wrapper.css'
import './styles/navbar.css'




function Wrapper() {
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
      {showComponent && <Wrapped />}
    </div>
  );
}

export default Wrapper;
