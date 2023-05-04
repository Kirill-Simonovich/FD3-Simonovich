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
      hoverRow: ''
    };
  },

  handleClick: function (row) {
    this.setState({ hoverRow: row });
  },

  deleteRow: function (key) {
    const index = this.props.productRow.findIndex(value => value.name === key);
    delete this.props.productRow.splice(index, 1);
    console.log(this.props.productRow)
  },

  render: function () {
    var productRows = this.props.productRow.map(v =>
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
