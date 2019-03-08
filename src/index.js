//Importing libraries from package
import React from 'react';
import ReactDOM from 'react-dom';

//React.createElement(type,props,children) - placed into virtual DOM
//ReactDOM.render(element to render, where to render and usually in index.html) - placed into real DOM
//Ex: Redact.createElement('img',{src:'media/cat.jpg'})
ReactDOM.render(
React.createElement('h1', {