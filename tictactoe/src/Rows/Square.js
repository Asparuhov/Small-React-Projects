import React from 'react';
import classes from './Square.module.css';
const Square = props => (
    <div className={classes.Square} onClick={props.clicked}>
          {props.value}
      </div>
);



export default Square;
