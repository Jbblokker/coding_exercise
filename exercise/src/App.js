import React from 'react'
import './App.css';

//component imports
import NewGame from './components/new_game';
import FinishedGame from './components/finished_game';
import Header from './components/header';
function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <NewGame/>
      <FinishedGame/>  
    </div>
   
  );
}

export default App;
