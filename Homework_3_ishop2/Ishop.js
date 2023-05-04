var Ishop = React.createClass({

  displayName: 'Ishop',

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

    return React.DOM.div({className: 'header'},
        React.DOM.div({ className: 'Title' }, this.props.title),
        React.createElement(TitleRow),
        React.createElement(Product, { productRow: this.props.productRow })
    );
  }

});
