import React from 'react';
import classes from './Person.module.css'
import AuxComp from '../../../hoc/AuxComp';
const Person = props =>
{
    return (
        <AuxComp>
            <p>I am {props.username} and im { props.age} years old</p>
            <p onClick={props.clicked}>Click me to remove</p>
            <input type="text" onChange={props.changed} value={props.username}/>
        </AuxComp>
    )
}
export default Person;