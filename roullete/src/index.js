import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const handleOnComplete = (value) => {
  console.log(value);
};

function genCharArray(charA, charZ) {
  var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}


const options = genCharArray('a', 'z');

ReactDOM.render(<App options={options} baseSize={150} onComplete={handleOnComplete}/>, document.getElementById('root'));
registerServiceWorker();
