import * as React from 'react';

interface Props {
  caption1: string,
  caption2: string,
  cbPressed: (word: string) => void
  children: string
}

export const DoubleButton = ({ caption1, caption2, cbPressed, children }: Props) => {

  return (
      <>
        <input type={'button'} value={caption1} onClick={() => cbPressed(caption1)} />
        <span> {children} </span>
        <input type={'button'} value={caption2} onClick={() => cbPressed(caption2)} />
      </>);
};
