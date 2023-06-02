import * as React from 'react';
import { EditProduct, ProductType } from '../../../interfaces/interfeces';

export default class Product extends React.PureComponent<ProductType> {

  setActive = (id: any) => {
    !this.props.hasChanges && this.props.setActiveId(id);
  };

  deleteRow = (key: any) => {
    const isDelete = window.confirm('Are you sure you want to delete?');
    isDelete && this.props.deleteProduct(key);
  };

  setEditProduct = (product: EditProduct) => {
    this.props.setEditProduct(product);
  };

  render() {
    return (
        <tr key={this.props.keyValue} 
            className={'product'} 
            onClick={() => this.setActive(this.props.keyValue)}
            style={{ backgroundColor: this.props.active ? '#f59106' : 'white' }}>
          <td className={'cell'}>{this.props.product.name}</td>
          <td className={'cell'}>{this.props.product.price} $</td>
          <td className={'cell'}>{this.props.product.stock} pcs</td>
          <td><img src={this.props.product.url}></img></td>
          <td>
            <button className={`button red ${this.props.hasChanges ? 'opacity' : ''}`} 
                    type={'button'}
                    onClick={() => this.deleteRow(this.props.product.id)} 
                    disabled={this.props.hasChanges}>Delete
            </button>
          </td>
          <td>
            <button className={`button ${this.props.hasChanges ? 'opacity' : ''}`} 
                    type={'button'}
                    onClick={() => this.setEditProduct(this.props.product)} 
                    disabled={this.props.hasChanges}>Edit
            </button>
          </td>
        </tr>
    );
  }
}
