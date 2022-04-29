//importamos react y reactDom que fueron las dependecias que instalamos al principio
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@routes/App';

ReactDOM.render(<App />, document.getElementById('app')); //hagame un render del archivo App y me lo muestra en una etiqueta html que tiene como ID 'app'
