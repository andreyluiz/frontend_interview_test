import React from 'react';
import { render } from 'react-dom';
import './index.scss';

const element = document.getElementById('app');

render(<h1 styleName="reddish">Hello</h1>, element);
