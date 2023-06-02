import * as React from 'react';
import { EditProduct } from '../../../interfaces/interfeces';

export default class InformationCard extends React.PureComponent<EditProduct> {

  render() {
    return (
        <div className={'information'}>
          <p className={'informationTitle'}>INFORMATION</p>
          <img src={this.props.url} />
          <div>Name: {this.props.name}</div>
          <div>Price: {this.props.price} $</div>
          <div>Count: {this.props.stock} pcs</div>
        </div>
    );
  }
}
