import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DoubleButton } from './src/component/DoubleButton';
import { withRainbowFrame } from './src/component/withRainbowFrame';

let colors: string[] = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];

const cbPressed = (word: string) => {
  alert(word);
};

let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

ReactDOM.render(
    <FramedDoubleButton caption1="однажды" caption2="пору" cbPressed={cbPressed}>
      в студёную зимнюю
    </FramedDoubleButton>,
    document.getElementById('container')
);
