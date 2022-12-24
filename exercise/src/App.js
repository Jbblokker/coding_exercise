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
        <h1 className='headerName'>New Games</h1>
        <div className='new_content'>
          <NewGame/>
        </div>
        <h1 className='headerName'>Finished Games</h1>
        <div className='finished_content'>
          <FinishedGame/>
        </div>
      </div>
    </div>
  );
}

export default App;
