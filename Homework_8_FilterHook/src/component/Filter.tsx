import * as React from 'react';
import { MutableRefObject, useRef, useState } from 'react';
import { Controls } from './Controls';
import { List } from './List';

interface Props {
  products: string[];
}

export const Filter = ({ products }: Props) => {

  const [inputText, setText] = useState('');
  const [checked, setChecked] = useState(false);
  const [list, setList] = useState(products);

  const checkboxEl= useRef<HTMLInputElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);
  const inputTextChanged = () => {
    sort();
    setText(inputEl!.current!.value);
  };

  const sort = () => {
    const input = inputEl!.current!.value;
    const checked = checkboxEl!.current!.checked;
    let arr = [...products].filter((word) => word.indexOf(input) !== -1);
    setList(checked ? [...arr].sort() : arr);
  };

  const checkbox = () => {
    setChecked(checkboxEl!.current!.checked);
    sort();
  };

  const reset = () => {
    setChecked(false);
    setList(products);
    setText('');
  };

  return (
      <>
        <Controls setChecked={checkbox}
                  checked={checked}
                  refChecked={checkboxEl}
                  setText={inputTextChanged}
                  inputText={inputText}
                  refInputText={inputEl}
                  reset={reset}></Controls>
        <List products={list}></List>
      </>);
};
