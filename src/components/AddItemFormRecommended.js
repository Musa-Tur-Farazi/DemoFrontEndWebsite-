import React, { useState } from 'react';
import Modal from 'react-modal';

const AddItemFormRecommended = ({ onAddItem, onClose }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleAddItem = () => {
    if (!itemName.trim() || isNaN(parseFloat(itemPrice))) {
      alert('Please enter valid item name and price.');
      return;
    }
    const newItem = {
      Name: itemName.trim(),
      Price: parseFloat(itemPrice),
      IsRecommended: true, 
    };

    onAddItem(newItem);
    setItemName('');
    setItemPrice('');
    onClose();
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose}>
      <div>
        <h2>Add Item</h2>
        <div>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="itemPrice">Item Price:</label>
          <input
            type="text"
            id="itemPrice"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </Modal>
  );
};

export default AddItemFormRecommended;
