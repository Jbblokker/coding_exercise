import React, { Component, useState } from 'react';

import './new.css'
//external imports 
import { GiGoalKeeper } from 'react-icons/gi'
export class new_game extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
          formValues: [{ name: "", number: "" }]
        };
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      handleChange(i, e) {
        let formValues = this.state.formValues;
        formValues[i][e.target.name] = e.target.value;
        this.setState({ formValues });
      }

      addFormFields() {
        this.setState(({
          formValues: [...this.state.formValues, {  name: "", number: "",name2: "", number2: ""}]
        }))
      }
      
       resetState () {
        this.setState({
        name: '',
        name2: '',
        number: '',
        number2: '',
        });
      }

      removeFormFields(i) {
        let formValues = this.state.formValues;
        formValues.splice(i, 1);
        this.setState({ formValues });
      }
      
      saveStateToLocalStorage = () => { 
        const oldInfo = JSON.parse(localStorage.getItem('data'));
        const newInfo = this.state.formValues
        console.log(newInfo)
        console.log(oldInfo)
        localStorage.setItem('data', JSON.stringify({ oldInfo, newInfo}));
      } 

      handleSubmit(event) {
        console.log(this.name)
        event.preventDefault();
        this.saveStateToLocalStorage();
        event.preventDefault();
        this.removeFormFields();
     }

  render() {
    return (
        <form className='form_list' onSubmit={this.handleSubmit}>
          {this.state.formValues.map((element, index) => (
            <div className='newTeam'>
                <div className='home_team'>
                    <label htmlFor='name'>
                        Home Team
                    </label> 
                    <input type ='text' name="name" className='name_input'  placeholder='Team&#39;s name' 
                        value={element.name || ""} onChange={e => this.handleChange(index, e)} />
                    <label className='icon'>
                        <GiGoalKeeper/>
                    </label>
                    <div>
                        <input type ='text' name='number'  className='number_input' placeholder='Score' 
                        value={element.number || ""} onChange={e => this.handleChange(index, e)} />
                    </div>
                </div>
                <div className='away_team'>
                <label htmlFor='name'>
                    Away Team
                </label>
                <input type ='text' name="name2" className='name_input' placeholder='Team&#39;s name'
                    value={element.name2 || ""} onChange={e => this.handleChange(index, e)}/>
                <label className='icon' >
                    <GiGoalKeeper/>
                </label>
                <div>
                <input type ='text' name='number2' className='number_input' placeholder='Score' 
                    value={element.number2 || ""} onChange={e => this.handleChange(index, e)} /> 
                </div> 
                </div>
                <button className="button_submit" type="submit">Submit</button>
                {
                index ? 
                  <button type="button"  className="button_remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button_section">
              <button className="button_add" type="button" onClick={() => this.addFormFields()}>Add</button>
          </div>
      </form>
    );
  }
}
export default new_game;


