import React from 'react';
import classes from './Person.module.css'

const Person = props =>
{
    return (
        <div className={classes.App}>
            <p>I am {props.username} and im { props.age} years old</p>
            <p onClick={props.clicked}>Click me to remove</p>
            <input type="text" onChange={props.changed} value={props.username}/>
        </div>
    )
}
export default Person;