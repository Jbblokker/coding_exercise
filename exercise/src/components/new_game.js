import React, { Component } from 'react';
import './new.css'

//external imports 
import { CiSquarePlus } from 'react-icons/ci'
import { CiSquareMinus } from 'react-icons/ci'

export class new_game extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 0,
          value2: 0,
        };
      }
  render() {
    return(
    <div className='body'>
        <h1 className='header'>New Games</h1>
        <div className='newTeam'>
            <form className='form_list' >
              
                    <label htmlFor='name'>Name</label>
                    <input type ='text' id='name' placeholder='Team&#39;s name'/>
                   
                    <div onClick={ ()=> this .setState({value: this.state.value +1})}>
                        <CiSquarePlus/>
                    </div>
                    <div>
                     {this.state.value} 
                    </div>
                    <div className='icon' onClick={ ()=> this .setState({value: this.state.value -1})}>
                        <CiSquareMinus/>
                    </div>
               
               
                    <label htmlFor='name'>Name</label>
                    <input type ='text' id='name' placeholder='Team&#39;s name'/>
                
              
                    <div onClick={ ()=> this .setState({value2: this.state.value2 +1})}>
                        <CiSquarePlus/>
                    </div>
                    <div>
                     {this.state.value2} 
                    </div>
                    <div onClick={ ()=> this .setState({value2: this.state.value2 -1})}>
                        <CiSquareMinus/>
                    </div>
             
           
            </form>   
        </div>
    </div>
    )
  }
}
export default new_game;