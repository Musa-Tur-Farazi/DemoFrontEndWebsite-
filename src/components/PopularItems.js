import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './styles/PopularItems.css';
import AddItemFormPopular from './AddItemFormPopular';

const PopularItems = () => {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10');
        setItems(response.data.Items);
        console.log("done");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const popularItems = items.filter((item) => item.IsPopular);

    const handleAddItem = (newItem) => {
      setItems((prevItems) => [...prevItems, newItem]);
      setShowForm(false);
    };
   
    if(!popularItems){
      return <p>Loading...</p>
    }
  return (
    <div className="popular-items">
      <h3>Popular</h3>
      <Modal isOpen={showForm} onRequestClose={() => setShowForm(false)}>
        <AddItemFormPopular onAddItem={handleAddItem} onClose={() => setShowForm(false)} />
      </Modal>
      <div className="button-container">
        <button className="add-more-button" onClick={() => setShowForm(true)}>
          Add More
        </button>
      </div>
      <div className="card-container">
        {popularItems.length === 0 ? (
          <p>No popular items available.</p>
        ) : (
          popularItems.map((item) => (
            <div key={item.Id} className="card">
              <img src={item.ImageUrl} alt={item.Name} />
              <h3>{item.Name}</h3>
              <p>Price: ${item.Price.toFixed(2)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );

};

export default PopularItems;
