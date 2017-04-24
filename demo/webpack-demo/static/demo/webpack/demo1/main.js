//require('./webpack-test1.css');

//var test2 = require('./webpack-test2.js');
//document.getElementById('root').appendChild(test2());

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

//import './main.css';

render(<Greeter />, document.getElementById('root'));