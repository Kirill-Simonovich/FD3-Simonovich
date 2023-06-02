import * as React from 'react';
import { EditProduct, Products } from '../../interfaces/interfeces';
import TitleRow from './TitleRow/TitleRow';
import Product from './Product/Product';
import InformationCard from './InformatiomCard/InformationCard';
import EditCard from './EditCard/EditCard';

export default class Shop extends React.PureComponent<Products> {

  createProduct = () => {
    this.props.setCreate();
  };

  editProduct = (product: EditProduct) => {
    this.props.setCreate();
  };

  render() {
    const productList = this.props.products.map(product =>
        <Product
            keyValue={product.id}
            product={product}
            active={product.id === this.props.activeId}
            setActiveId={this.props.setActiveId}
            deleteProduct={this.props.deleteProduct}
            setEditProduct={this.props.setEditProduct}
            hasChanges={this.props.hasChanges}
        />);

    const information = this.props.products
        .filter(product => product.id === this.props.activeId)
        .map(product => <InformationCard
            name={product.name}
            url={product.url}
            price={product.price}
            stock={product.stock}
        />);

    const editCard = <EditCard product={this.props.product}
                               cancel={this.props.cancel}
                               editProduct={this.props.editProduct}
                               save={this.props.save} />;

    return (
        <>
          <p className={'title'}>Shop</p>
          <table className={'products'}>
            <TitleRow></TitleRow>
            <tbody>
            {productList}
            </tbody>
          </table>
          <button type={'button'}
                  disabled={this.props.isEdit || this.props.isCreate}
                  onClick={this.createProduct}>
            New Product
          </button>
          {this.props.isCreate ? editCard : false}
          {this.props.isEdit ? editCard : false}
          {information}
        </>
    );
  }
}
