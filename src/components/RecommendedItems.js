import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './styles/RecommendedItems.css';
import AddItemFormRecommended from './AddItemFormRecommended';

const RecommendedItems = () => {
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
    const recommendedItems = items.filter((item) => item.IsRecommended);
    const handleAddItem = (newItem) => {
      setItems((prevItems) => [...prevItems, newItem]);
      setShowForm(false);
    };
  
  return (
    <div className="recommended-items">
      <h3>Recommended</h3>
      <Modal isOpen={showForm} onRequestClose={() => setShowForm(false)}>
        <AddItemFormRecommended onAddItem={handleAddItem} onClose={() => setShowForm(false)} />
      </Modal>
      <div className="button-container">
        <button className="add-more-button" onClick={() => setShowForm(true)}>
          Add More
        </button>
      </div>
      <div className="card-container">
        {recommendedItems.length === 0 ? (
          <p>No recommended items available.</p>
        ) : (
          recommendedItems.map((item) => (
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

export default RecommendedItems;
