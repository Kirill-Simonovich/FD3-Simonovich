var TitleRow = React.createClass({

  displayName: 'TitleRow',

  render: function () {
    return React.DOM.table({ className: 'Product' },
        React.DOM.td({}, 'Название'),
        React.DOM.td({}, 'Цена'),
        React.DOM.td({}, 'В наличии'),
        React.DOM.td({}, 'Фото'),
        React.DOM.td({}, 'Control')
    );
  }

});
