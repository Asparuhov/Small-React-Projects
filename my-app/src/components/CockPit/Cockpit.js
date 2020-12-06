import React from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    
    return (
        <div className={classes.Cockpit}>
        <button className={classes.Button}onClick={props.toggle} alt={props.showPeople}>Reverse</button>
        <p>Just Checking if the coloring works</p>
    </div>    
    )

}

export default Cockpit;