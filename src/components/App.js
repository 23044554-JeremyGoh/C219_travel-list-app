import { useState } from 'react';
import Logo from './Logo';
import PackingList from './PackingList';
import Stats from './Stats';
import Form from './Form';



function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id)); 
  }
  
  function handleUpdateItem(id){
    setItems((prevItems)=> prevItems.map((item) =>
    item.id === id ? {...item, packed: !item.packed} : item
    ));

  }

  function clearAllItems(){
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList items={items} 
      onDeleteItem={handleDeleteItem} 
      onUpdateItem={handleUpdateItem}/>
      <Stats
      items= {items} />
      <button onClick={clearAllItems}>Clear All Items</button>
    </div>
  );
}

export default App;













