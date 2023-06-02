import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EditProduct } from './src/interfaces/interfeces';
import './src/styles/Products.css';
import App from './src/App';

const data: EditProduct[] = require('./src/resources/products.json');

ReactDOM.render(
    <App products={data} />,
    document.getElementById('container')
);
