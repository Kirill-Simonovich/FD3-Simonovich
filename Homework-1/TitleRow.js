var TitleRow = React.createClass({

  displayName: 'TitleRow',

  render: function () {
    return React.DOM.table({ className: 'Product ' },
        React.DOM.td({ className: 'TitleRow' }, 'Название'),
        React.DOM.td({ className: 'TitleRow' }, 'Цена'),
        React.DOM.td({ className: 'TitleRow' }, 'В наличии'),
        React.DOM.td({ className: 'TitleRow' }, 'Фото')
    );
  }

});
