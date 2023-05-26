import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BR2JSX from './BR2JSX';

let text = 'первый<br>второй<br/>третий<br />последний';

ReactDOM.render(
    <BR2JSX text={text} />,
    document.getElementById('container')
);
