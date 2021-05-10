import Header from './components/Header';
//import CreateDeckForm from "./components/CreateDeckForm";
import NewDeck from "./components/NewDeck";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



function App() {

  const [decks, setDecks] = useState([])
 

  useEffect(() => {
    const fetchDecks = async () => {
      const result = await axios('http://localhost:5000/decks')
      console.log(result.data)
      setDecks(result.data)
    }
      fetchDecks()
  }, [])

  return (
    <div className="App">
        <Header />
        <NewDeck />
    
   
      
      

        


    </div>
  );
}

export default App;
