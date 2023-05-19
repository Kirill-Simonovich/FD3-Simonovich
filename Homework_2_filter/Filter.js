var Filter = React.createClass({

  displayName: 'Filter',

  propTypes: {
    products: React.PropTypes.arrayOf(
        React.PropTypes.string.isRequired
    )
  },

  getInitialState: function () {
    return {
      inputText: '',
      checked: false,
      list: this.props.products
    };
  },

  inputTextChanged: function (EO) {
    this.setState({ inputText: EO.target.value }, this.process);
  },

  sort: function () {
    this.setState({ checked: !this.state.checked }, this.process);
  },

  reset: function () {
    this.setState({ checked: false });
    this.setState({ list: this.props.products });
    this.setState({ inputText: '' });
  },

  process: function () {
    let list = this.props.products;
    if (this.state.inputText) {
      list = list.filter(product => product.includes(this.state.inputText));
    }
    if (this.state.checked) {
      if (list === this.props.products) {
        list = this.props.products.slice();
      }
      list.sort();
    }
    this.setState({ list: list });
  },


  render: function () {

    var productRows = this.state.list.map(value =>
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
