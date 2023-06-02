import * as React from 'react';
import Shop from './components/Shop/Shop';
import './styles/Products.css';
import { AppType, EditProduct } from './interfaces/interfeces';

const defaultProduct = {
  id: -1,
  name: '',
  price: 0,
  stock: 0,
  url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAYFBMVEXp6uybm5ubm5nr7O6Xl5fo6OrNzc7f4OLq6e6UlJadnZ+Wl5jl5eehoaLFxcTs7e6vr6/W1teztLays7W/v8HY2Nm7u7uoqKnKysyhoaDDxMempqi9vbyqqqnW1tXP0NI0zuHSAAAEcUlEQVR4nO2c63aqMBBGQyeRkgBBFKza1vd/y5MgKldru5qacL79o12rKCvbXGZCpjIGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAMKPD7/xRBr85gRGTNvXO37SKHMPKyw4l0vHLHWmjysLMZnY4Jd4ZSSRn7Jk2CUc4jt/CsolfxbNU+dIpca0d8J16f7dlFmNG3cy1tUG++aVeXpr249N69euXNaKWadmXSEc0n+pKlfq1qrbaqYke8c6u991M7EcJNyqJz7nFvJ6ZZTkIM5T4PcqvtpLfJ+952gv+D3AnQ9olf0zZrg6bzLrbLsrUFCYrzoijqldDdC8vWJkrLhNtNDY9yGxQuFxauXckka/NvvvlftCm+pN/NzTa3K8vVptHuVeXX+b1gbXOTwT7zZrlkbb1TfW1+Cl6bhqF4/AomB70d1QFrN9mHWOer1Py6d494pF1cJneA2ibxoPU+iXiyveu9MG2Tea2Vfawqk1qPL99elw61eciDnLFYNlelTA7zzRZEw6evfBVobzfHN6LNQZT5uZ5ttyB96EnLSKaXi4Fp2wVcfHRDcXWn4WnWPWKQaiuCHeTE6qTbh8d0/vyOTt1Xqt3tbqFpE23VvteFxWz8NglL3pnYxzjcrYh+62deUqpyejkX9vxQf+7bY5WkSDvRLiBtE7iY7g3bthvz+TBmloK3jVQqKyvdNQxI23jraixtJu1Jz2Yt6fWBc+/PQWnreD/Sbharara/z7ojuYC0idLp01+pjvOFCTbSi2C1bet1oSa1DYVdwCZH+rRXGNp2NSP9nsxZm2z7e/cPQ/scg+9VdajD/V3ogDC0bSnVid+tZlEr/Q2FALTtYjwVuoas9WSdGZk0xZ5os+4891+bTOjVOs7udfWZdLKuUNhwn7/nse6s6AFoM5OMpLuvrfmHmdyT87uMOOfRoRPcA9C2y3jxSJEaL9nEtoTYRp235/UtVwtBm1H9WGme2k5ka2Sspd2PmE3LdRoEoC30YTZNGWKfGnUXNjNSystH9hLxIm1TNv+1rzVqjwzz6JNEN36TKLtv5rt2z+2/tq6UHD35nWVvFuzOBO9bm2mQxWFoN6eWD1tH0bHT27av+++VSjYP3/yuVOKpTrNJu1l4oc/rmslRxGZiKXxZe1+gxdPHQlfPu26KVeasDSvyvLcT8WDo6nm32bnYqOn6ZPXmefFl9ANrw9oGMTpnKRM3kCa++639M/aVmd8mXs8uhapeojY/CjYzr6+fTLQ87Sgqygdmx/K0z6Vo99T3EV+g9iNA2xOgDW1oQxva0IY2tKENbW+ANrShvUhtotOfaB/HpVvPhFjs9is4GqTc+GUtGH3x5PNXtNX6q/8u+lPsIdVMneVvktQzRR/PwvSB/tw77m9e2u/5eLbqEBLbLHGHOp68GuE3zs0SbqDvVO/9JW01pZPvH2FsouzYC5rCLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOb4B+27V7ieE7HkAAAAAElFTkSuQmCC'
};
export default class App extends React.PureComponent<AppType> {

  state = {
    activeId: null,
    list: this.props.products,
    isEdit: false,
    isCreate: false,
    hasChanges: false,
    product: defaultProduct
  };

  setCreateMode = (): void => {
    const isNewProuct = (this.state.product.id === -1);
    this.setState({
      product: {
        ...this.state.product,
        id: isNewProuct ? this.newId() : this.state.product.id
      }, isEdit: false, isCreate: true, hasChanges: true, activeId: -1
    });
  };

  setActiveId = (id: number): void => {
    this.setState({ activeId: id });
  };

  deleteProduct = (key: number) => {
    this.setState({ list: this.state.list.filter(value => value.id !== key) });
  };

  setEditProduct = (product: EditProduct): void => {
    this.setState({ isCreate: false, isEdit: true, product: product });
  };

  editProduct = (product: EditProduct): void => {
    this.setState({ product: product, hasChanges: true });
  };

  cancel = () => {
    this.setState({ isCreate: false, isEdit: false, hasChanges: false });
  };

  newId = (): number => {
    return this.state.list.length + 1;
  };

  save = (product: EditProduct) => {
    let newArrayProducts = this.state.list.map((element) => element.id !== product.id ? element : product);
    const isOldProduct = newArrayProducts.some((el) => el.id === product.id);
    !isOldProduct && newArrayProducts.push(product);
    this.setState({ list: newArrayProducts, product: defaultProduct });
    this.cancel();
  };

  render() {
    return (
        <Shop
            activeId={this.state.activeId}
            products={this.state.list}
            isEdit={this.state.isEdit}
            isCreate={this.state.isCreate}
            hasChanges={this.state.hasChanges}
            product={this.state.product}
            setActiveId={this.setActiveId}
            deleteProduct={this.deleteProduct}
            save={this.save}
            setCreate={this.setCreateMode}
            setEditProduct={this.setEditProduct}
            editProduct={this.editProduct}
            cancel={this.cancel}
        />
    );
  }
}
