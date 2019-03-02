
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';
import StyleComponent from './components/StyleComponent/StyleComponent';

ReactDOM.render( 
    <Button>StyleComponent</Button>,
    document.getElementById('app') || document.createElement('thisIsForjest')
);