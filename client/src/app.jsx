import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './components/HomePage.jsx';
import SignUpForm from './components/SignUpForm.jsx';

const App = () => (
    <div>
        <HomePage />
     </div>
);

ReactDom.render(<App />, document.getElementById('App'));