import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/ui/header';
import CharacterGrid from './components/characters/character-grid';


function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    // fetch items from API with async await and axios
    const fetchItems = async () => {
      const result = await axios(
        'https://www.breakingbadapi.com/api/characters'
      )
      console.log(result.data)
      setItems(result.data)
    }
    fetchItems()
  }, [])
  return (
    <div className="App">
      <Header />
      <CharacterGrid items={items}/>
      <h1>Breaking Bad</h1>
    </div>
  );
}

export default App;
