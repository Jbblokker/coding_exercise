import React, { Component } from 'react'
import './finished.css'
export class finished_game extends Component {
    data = {
        team1:"Germany",
        team2:"Italy",
        team1score: 3,
        team2score: 4,
    }

    teamData = []
    // save data to localStorage 
  saveStateToLocalStorage = () => { 
    localStorage.setItem(this.teamData, JSON.stringify(this.data)); 
  } 
  
  // Fetch data from local storage 
  getStateFromLocalStorage = () => { 
    let data = localStorage.getItem('data'); 
    if(data !== undefined) { 
      this.setState(JSON.parse(data)); 
    } 
  } 
  
  componentDidMount() { 
    this.saveStateToLocalStorage();
    this.getStateFromLocalStorage(); 
  } 
  

  render() {
    return(
    <div className='body'>
   
    <p>{this.data.team1}</p>
    </div>
    )
  }
}
export default finished_game;