import React from 'react';
import {render} from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Routers from './route';
import 'highlight.js/styles/github.css';
import './post.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(<Routers />,document.getElementById('root'));
