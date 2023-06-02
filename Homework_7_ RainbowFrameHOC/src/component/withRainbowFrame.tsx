import * as React from 'react';

interface Colors {
  colors: string[],
  children: any
}

export const withRainbowFrame = (colors: string[]) => (Fragment: any) => ({ ...props }) => {
  
  let result = colors.reduce(
      (acc: any, color: any) => {
        return <div style={{ border: `solid 8px ${color}`, padding: '8px' }}>{acc}</div>;
      },
      <Fragment {...props}/>);

  return (
      <div style={{ width: '500px', textAlign: 'center' }}>
        {result}
      </div>);
};
