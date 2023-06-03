import * as React from 'react';

interface Props {
  products: string[];
}

export const List = ({ products }: Props) => {

  var productRows = products.map(value =>
      <p key={value}>{value}</p>
  );

  return (
      <div className={'list'}>{productRows}</div>);
};
