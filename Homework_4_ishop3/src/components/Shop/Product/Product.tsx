import * as React from 'react';
import { ProductType } from '../../../interfaces/interfeces';

export default class Product extends React.PureComponent<ProductType> {

  setActive = (name: string) => {
    this.props.setActiveId(name);
  };

  deleteRow = (key: string) => {
    const isDelete = window.confirm('Вы действительно хотите удалить?');
    isDelete && this.props.deleteProduct(key);
  };

  render() {

    return (
        <tr key={this.props.name} className={'product border'} onClick={() => this.setActive(this.props.name)}
            style={{ backgroundColor: this.props.active ? 'orange' : 'white' }}>
          <td className={'cell'}>{this.props.name}</td>
          <td className={'cell'}>{this.props.price} $</td>
          <td className={'cell'}>{this.props.stock} шт.</td>
          <img src={this.props.url}></img>
          <button className={'button'} type={'button'} onClick={() => this.deleteRow(this.props.name)}>Удалить</button>
        </tr>
    );
  }
}
