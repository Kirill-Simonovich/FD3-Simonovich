import * as React from 'react';
import { Title } from '../../../interfaces/interfeces';
export default class TitleRow extends React.PureComponent<Title> {

  render() {
    return (
        <div>
          <div className={'title'}>{this.props.title}</div>
          <table className={'product'}>
          <td>Название</td>
          <td>Цена</td>
          <td>В наличии</td>
          <td>Фото</td>
          <td>Control</td>
        </table>
        </div>
    );
  }
}
