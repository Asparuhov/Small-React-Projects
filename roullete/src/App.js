import React, {Component} from 'react';
import Roulette from './components/Roulette/Roulette';
import classes from './App.module.css';
class App extends Component{
    render() {
        return (
            <div className={classes.App}>
                <Roulette {...this.props} />
            </div>
        );
    }
}

export default App;