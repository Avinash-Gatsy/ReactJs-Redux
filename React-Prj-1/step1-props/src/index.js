import React from 'react';
import ReactDOM from 'react-dom';
// import FirstComponent from './components/first.componet';
import SecondComponent from './components/second.component';



// ReactDOM.render(<FirstComponent message="React App" second={2019}><span>Woah! this is a inline HTML from parent</span></FirstComponent>, document.getElementById('root'));
ReactDOM.render(<SecondComponent/>, document.getElementById('root'));