var Product = React.createClass({

  displayName: 'Product',

  propTypes: {
    productRow: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          url: React.PropTypes.string.isRequired,
          price: React.PropTypes.number.isRequired,
          stock: React.PropTypes.number.isRequired
        })
    )
  },

  getInitialState: function () {
    return {
      hoverRow: '',
      list: this.props.productRow
    };
  },

  handleClick: function (row) {
    this.setState({ hoverRow: row });
  },

  deleteRow: function (key) {
    this.setState({ list: this.state.list.filter(value => value.name !== key) });
  },

  render: function () {
    var productRows = this.state.list.map(v =>
        React.DOM.table({
              key: v.name,
              className: 'Product',
              onClick: () => this.handleClick(v.name),
              style: { backgroundColor: v.name === this.state.hoverRow ? 'orange' : 'white' }
            },
            React.DOM.td({ className: 'Cell' }, v.name),
            React.DOM.td({ className: 'Cell' }, v.price + ' $'),
            React.DOM.td({ className: 'Cell' }, v.stock + ' шт.'),
            React.DOM.img({ src: v.url }),
            React.DOM.button({
              className: 'button',
              type: 'button',
              onClick: () => this.deleteRow(v.name)
            }, 'Удалить')
        )
    );

    return React.DOM.tr({ className: 'Products' }, productRows);
  }

});
