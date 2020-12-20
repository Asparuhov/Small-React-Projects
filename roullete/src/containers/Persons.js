import React, { Component } from 'react';
import {connect} from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
    }



    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addPerson} />
                {this.props.people.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const stateToProps= (state) => {
    return {people: state.people}
}
const useActions = dispatch => {
    return {
        addPerson: () => dispatch({
            type: 'ADDPERSON', person: {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
        }),
        personDeleted: (id) => dispatch({type: 'DELETEPERSON', id:id})
    }
}
export default connect(stateToProps, useActions)(Persons);