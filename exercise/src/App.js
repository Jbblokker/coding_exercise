import React from 'react'
import './App.css';

//component imports
import NewGame from './components/new_game';
import FinishedGame from './components/finished_game';
import Header from './components/header';
function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Header/>
      </div>
      <div className='content'>
        <h1>New Games</h1>
        <NewGame/>
        <h1>Finished Games</h1>
        <FinishedGame/> 
      </div>
    </div>
   
  );
}

export default App;
