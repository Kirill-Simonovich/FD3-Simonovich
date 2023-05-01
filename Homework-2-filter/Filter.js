var Filter = React.createClass({

  displayName: 'Filter',

  propTypes: {
    products: React.PropTypes.arrayOf(
        React.PropTypes.string.isRequired
    )
  },

  getInitialState: function () {
    let arr = this.props.products;
    return {
      inputText: '',
      checked: false,
      products: [...arr]
    };
  },

  inputTextChanged: function (EO) {
    this.setState({ inputText: EO.target.value });
    this.setState({ products: this.state.products.filter(word => word.includes(EO.target.value)) });
  },

  sort: function () {
    this.setState({ checked: !this.state.checked });
    if (this.state.checked) {
      this.setState({ products: this.props.products });
    } else {
      this.setState({ products: this.state.products.sort() });
    }
  },

  reset: function () {
    this.setState({ checked: false });
    this.setState({ products: this.props.products });
    this.setState({ inputText: '' });
  },

  render: function () {

    var productRows = this.state.products.map(value =>
        React.DOM.p({ key: value }, value)
    );

    return React.DOM.div(
        {},
        React.DOM.input({ type: 'checkbox', className: 'checkbox', checked: this.state.checked, onClick: this.sort }),
        React.DOM.input({
          type: 'text',
          onChange: this.inputTextChanged,
          value: this.state.inputText
        }),
        React.DOM.button({ type: 'reset', className: 'button', onClick: this.reset }, 'reset'),
        React.DOM.div({ className: 'list' }, productRows)
    );
  }

});
