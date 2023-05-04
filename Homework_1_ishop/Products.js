var Products = React.createClass({

  displayName: 'Products',

  propTypes: {
    title: React.PropTypes.string.isRequired,
    productRow: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          url: React.PropTypes.string.isRequired,
          price: React.PropTypes.number.isRequired,
          stock: React.PropTypes.number.isRequired
        })
    )
  },

  render: function () {

    var productRows = this.props.productRow.map(v =>
        React.DOM.table({ key: v.name, className: 'Product ' },
            React.DOM.td({ className: 'Cell' }, v.name),
            React.DOM.td({ className: 'Cell' }, v.price + ' $'),
            React.DOM.td({ className: 'Cell' }, v.stock + ' шт.'),
            React.DOM.img({ className: 'Photo', src: v.url })
        )
    );
    return React.DOM.div({ className: 'Product' },
        React.DOM.div({ className: 'Heading' }, this.props.title),
        React.createElement(TitleRow),
        React.DOM.tr({ className: 'Products' }, productRows)
    );
  }

});
