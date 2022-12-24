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
          formValues: [...this.state.formValues, {  home_name: "", home_score: "",away_team: "", away_score: ""}]
        }))
      }
      
       resetState () {
        this.setState({
        home_name: '',
        away_name: '',
        away_score: '',
        home_score: '',
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
        localStorage.setItem('data', JSON.stringify({newInfo, oldInfo}));
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
                    <label className='label_name' htmlFor='name'>
                        Home Team
                    </label> 
                    <input type ='text' name="name" className='name_input'  placeholder='  Team&#39;s name' 
                        value={element.name || ""} onChange={e => this.handleChange(index, e)} />
                    <label className='icon'>
                        <GiGoalKeeper/>
                    </label>
                    <div>
                        <input type ='text' name='score'  className='number_input' placeholder='  Score' 
                        value={element.score || ""} onChange={e => this.handleChange(index, e)} />
                    </div>
                </div>
                <div className='away_team'>
                    <label className='label_name' htmlFor='name'>
                        Away Team
                    </label>
                    <input type ='text' name="away_team" className='name_input' placeholder='  Team&#39;s name'
                        value={element.away_team || ""} onChange={e => this.handleChange(index, e)}/>
                    <label className='icon' >
                        <GiGoalKeeper/>
                    </label>
                    <div>
                        <input type ='text' name='away_score' className='number_input' placeholder='  Score' 
                        value={element.away_score || ""} onChange={e => this.handleChange(index, e)} /> 
                    </div> 
                </div>
                <div className='button_section'>
                    <button className="button_submit" type="submit">Submit</button>
                    {
                    index ? 
                    <button type="button"  className="button_remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                    : null
                    }
                    <button className="button_add" type="button" onClick={() => this.addFormFields()}>Add</button>
                </div>
            </div>
          ))}
      </form>
    );
  }
}
export default new_game;


