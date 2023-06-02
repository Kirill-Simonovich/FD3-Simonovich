import * as React from 'react';
import { Title } from '../../../interfaces/interfeces';

export default class TitleRow extends React.Component<any, any> {

  render() {
    return (
        <thead>
        <tr className={'product'}>
          <td>Name</td>
          <td>Price</td>
          <td>Count</td>
          <td>Photo</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>
        </thead>
    );
  }
}
