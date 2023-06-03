import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Filter } from './src/component/Filter';
import './src/styles/Filter.css';

var products = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

ReactDOM.render(
    <Filter products={products}/>,
    document.getElementById('container')
);
