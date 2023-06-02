import * as React from 'react';
import { Titles } from '../../../enums/titles';
import { EditProps } from '../../../interfaces/interfeces';

export default class EditCard extends React.PureComponent<EditProps> {

  onNameChange = (e: any) => {
    this.props.editProduct({ ...this.props.product, name: e.target.value });
  };

  onPriceChange = (e: any) => {
    this.props.editProduct({ ...this.props.product, price: e.target.value });
  };

  onUrlChange = (e: any) => {
    this.props.editProduct({ ...this.props.product, url: e.target.value });
  };

  onCountChange = (e: any) => {
    this.props.editProduct({ ...this.props.product, stock: e.target.value });
  };

  cancel = () => {
    this.props.cancel();
  };

  save = () => {
    this.props.save(this.props.product);
  };

  render() {

    let disabledSave = !this.props.product.name || this.props.product.price == 0 || !this.props.product.url || this.props.product.stock == 0;

    let notValidInput = (flag: boolean, type: string) => flag && <span
        className={'alert'}>Please fill the fields, Value must be a {type}!</span>;

    return (
        <div className={'editCard'}>
          <p className={'informationTitle'}>{Titles.EDIT_TITLE}</p>
          <label>Name</label>
          <input type={'text'}
                 value={this.props.product.name}
                 onChange={this.onNameChange} />{notValidInput(!this.props.product.name, 'text')}<br />
          <label>Price</label>
          <input type={'number'}
                 value={this.props.product.price} min={0}
                 onChange={this.onPriceChange} />{notValidInput(this.props.product.price == 0, 'number')}<br />
          <label>URL</label>
          <input type={'text'}
                 value={this.props.product.url}
                 onChange={this.onUrlChange} />{notValidInput(!this.props.product.url, 'text')}<br />
          <label>Quantity</label>
          <input type={'number'}
                 value={this.props.product.stock} min={0}
                 onChange={this.onCountChange} />{notValidInput(this.props.product.stock == 0, 'number')}<br />
          <div>
            <button type={'button'} disabled={disabledSave} onClick={this.save}>Save</button>
            <button type={'button'} onClick={this.cancel}>Cancel</button>
          </div>
        </div>
    );
  }
}
