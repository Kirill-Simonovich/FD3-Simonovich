import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Shop from './src/components/Shop/Shop';
import { ProductType } from './src/interfaces/interfeces';
import './src/styles/Products.css';
import App from './src/App';

const title = 'Shop';
const data: ProductType[] = require('./src/resources/products.json');

ReactDOM.render(
    <App title={title} products={data} />,
    document.getElementById('container')
);
