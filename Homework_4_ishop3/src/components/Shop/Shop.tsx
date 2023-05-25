import * as React from 'react';
import { Products } from '../../interfaces/interfeces';
import TitleRow from './TitleRow/TitleRow';
import Product from './Product/Product';

export default class Shop extends React.PureComponent<Products> {

  render() {
    console.log(`Shop component props activeId = ${this.props.activeId}}`)

    const productList = this.props.products.map(value =>
        <Product
            name={value.name}
            url={value.url}
            price={value.price}
            stock={value.stock}
            active={value.name === this.props.activeId}
            setActiveId={this.props.setActiveId}
            deleteProduct={this.props.deleteProduct}
        />);

    return (
        <>
          <TitleRow title={this.props.title}></TitleRow>
          <table className={'products border'}>{productList}</table>
        </>
    );
  }
}
