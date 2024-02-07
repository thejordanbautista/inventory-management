import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import InventoryList from './components/InventoryList';
import AddItemForm from './components/AddItemForm';
import { fetchItems, addItem } from './api/api';


function App() {
  const [items, setItems] = useState([]);

    useEffect(() => {
        const init = async () => {
          const fetchedItems = await fetchItems();
          setItems(fetchedItems);
      };
      init();
  }, []);
  
  const handleAddItem = async (newItem) => {
      const addedItem = await addItem(newItem);
      setItems([...items, addedItem]);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
