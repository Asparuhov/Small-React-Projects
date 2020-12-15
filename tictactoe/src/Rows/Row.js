import React from 'react';
import Square from './Square';
import classes from './Row.module.css'
const Row = props => {
    <div className={classes.Row}>
         <div>
           <Square value={props.value}/>
        </div>
        <div>
            <Square value={props.value}/>
        </div>
        <div>
            <Square value={props.value}/>
        </div>
    </div>
};

export default Row;