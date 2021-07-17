import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/ui/header';
import CharacterGrid from './components/characters/character-grid';
import Search from './components/ui/search';


function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // fetch items from API with async await and axios
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className="App">
      <Header />
      <Search placeholder={"search characters"} getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
      <h1>Breaking Bad</h1>
    </div>
  );
}

export default App;
