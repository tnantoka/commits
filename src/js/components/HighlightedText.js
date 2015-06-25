var React = require('react');

var HighlightedText = React.createClass({

  render: function () {

    var text = this.props.text;
    text = text.replace(/\n/, '<br>');

    var pattern = new RegExp('(' + this.props.query + ')', 'gi');
    text = text.replace(pattern, '<mark>$1</mark>');

    return (
      <span dangerouslySetInnerHTML={{ __html: text }}></span>
    );
  }
});

module.exports = HighlightedText;
