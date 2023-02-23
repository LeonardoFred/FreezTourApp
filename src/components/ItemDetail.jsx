import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/card.css'

function ItemDetail() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get(`http://localhost:8080/api/tour/${id}`);
      setItem(response.data);
    };
    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="section_content3">
    <h3>{item.tourName}</h3> 
    <p>{item.description}</p>
   </div>
   

  );
}

export default ItemDetail;
