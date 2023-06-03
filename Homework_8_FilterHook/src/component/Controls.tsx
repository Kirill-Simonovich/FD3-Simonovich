import * as React from 'react';
import { MutableRefObject } from 'react';

interface Props {
  setChecked: () => void,
  setText: () => void,
  checked: boolean,
  inputText: string,
  refChecked: any,
  refInputText: any,
  reset: any
}

export const Controls = ({ setChecked, setText, checked, inputText, refChecked, refInputText, reset }: Props) => {

  return (
      <>
        <input type={'checkbox'} className={'checkbox'} ref={refChecked} checked={checked} onClick={setChecked} />
        <input type={'text'} value={inputText} ref={refInputText} onChange={setText} />
        <button type={'reset'} className={'button'} onClick={reset}>reset</button>
      </>
  );
};
