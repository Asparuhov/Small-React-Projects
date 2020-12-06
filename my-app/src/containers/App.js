import { render } from "@testing-library/react";
import React, { useState, Component } from "react";
import People from "../components/People/People";
import Person from "../components/People/Person/Person";
import classes from './App.module.css'
import Cockpit from '../components/CockPit/Cockpit'
class App extends Component{ 

  
  state = {
    people: [
      { id: 'aswqqew', name: 'qsha', age: 19 },
      { id: 'aswqqffew', name: 'krisko', age: 19 },
      {id: 'aswqqsfffew', name: 'kbibo', age: 19}
    ]
  }
   
  
  changeHandler = (event, id) =>{
    let index = this.state.people.findIndex(el => el.id === id);

    const person = { ...this.state.people[index] };

    person.name = event.target.value;

    let people = [...this.state.people];
    people[index] = person;

    this.setState({people: people})
   }
  

  togglePeople = () =>{
    let reverse = !this.state.showPeople
    this.setState({
      showPeople: reverse
   })
  }
  deleteElement = (indexed) =>{
    let arr = [...this.state.people];
    arr.splice(indexed, 1);
    this.setState({people: arr})

  }
  render(){
    
    let persons = null;
    if (this.state.showPeople) {
      persons = <People
        people={this.state.people}
        clicked={this.deleteElement}
        changed={this.changeHandler}
      />;
    }
      
    
    return (
      <div className={classes.App}>
        <Cockpit toggle={this.togglePeople}/>
      {persons}
      </div>
    )
  }
}
export default App;

