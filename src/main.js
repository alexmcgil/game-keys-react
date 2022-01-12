import React from 'react';
import ReactDom from 'react-dom';
import "Components/Header/Header"

import App from './App.jsx';

ReactDom.render(
	<App/>,
	document.querySelector('.app'),
);