import * as React from 'react';
import Shop from './components/Shop/Shop';
import './styles/Products.css';
import { AppType } from './interfaces/interfeces';

export default class App extends React.PureComponent<AppType> {

  state = {
    activeId: '',
    list: this.props.products
  }

  setActiveId = (id: string): void => {
    return this.setState({ activeId: id })
  }

  deleteProduct = (key: string) => {
    this.setState({ list: this.state.list.filter(value => value.name !== key) });
  }

  render() {
    return (
        <Shop title={this.props.title} products={this.state.list} activeId={this.state.activeId} setActiveId={this.setActiveId} deleteProduct={this.deleteProduct} />
    );
  }
}
