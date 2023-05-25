import * as React from 'react';

interface Colors {
  colors: string[],
  children: string
}

export default class RainbowFrame extends React.PureComponent<Colors> {

  render() {

    let result = this.props.colors.reduce(
        (acc: any, color: any) => {
          return <div style={{ border: `solid 8px ${color}`, padding: '8px' }}>{acc}</div>;
        },
        <b style={{fontSize: '21px'}}>{this.props.children}</b>);

    return (
        <div style={{ width: '500px', textAlign: 'center' }}>
          {result}
        </div>);
  }
}
