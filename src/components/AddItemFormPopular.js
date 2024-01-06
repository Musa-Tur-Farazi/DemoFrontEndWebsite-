// src/components/AddItemForm.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const AddItemFormPopular = ({ onAddItem, onClose }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleAddItem = () => {
    // Validate input
    if (!itemName.trim() || isNaN(parseFloat(itemPrice))) {
      alert('Please enter valid item name and price.');
      return;
    }

    // Create a new item object
    const newItem = {
      Name: itemName.trim(),
      Price: parseFloat(itemPrice),
      IsPopular: true, // Assuming newly added items are popular
      // Add other properties as needed
    };

    // Call the onAddItem function passed from the parent component
    onAddItem(newItem);

    // Clear form fields
    setItemName('');
    setItemPrice('');

    // Close the modal
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

export default AddItemFormPopular;
