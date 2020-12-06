import React from 'react';
import Person from './Person/Person'

const People = (props) => props.people.map((person, index) => {
    return <Person username={person.name}
        age={person.age}
        clicked={() => props.clicked(index)}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
    />
});

export default People;