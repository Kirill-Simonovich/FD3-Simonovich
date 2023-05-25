import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RainbowFrame from './RainbowFrame';

let colors: string[] = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];


ReactDOM.render(
    <RainbowFrame colors={colors}>
      Hello!
    </RainbowFrame>,
    document.getElementById('container')
);
