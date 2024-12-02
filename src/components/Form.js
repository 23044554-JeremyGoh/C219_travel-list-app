import { useState } from 'react';
export default function Form({ onAddItems, handleClearItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!description) return; // prevent adding item with empty description
      const newItem = {
        id: Date.now(),
        description: description,
        quantity: quantity,
        packed: false,
      };
  
      onAddItems(newItem);
  
      setDescription('');
      setQuantity(1);
    };
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <select name="quantity" id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input type="text" placeholder="Item…" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Add</button>
        <button type="button" onClick={handleClearItems}>Clear All Items</button>
      </form>
    );
  }