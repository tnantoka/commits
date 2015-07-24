var React = require('react');

var HighlightedText = React.createClass({

  render: function () {

    var text = this.props.text;
    text = text.replace(/\n/, '<br>');

    this.props.query.split(/\s/).forEach(function(q) {
      try {
        var pattern = new RegExp('(' + q + ')', 'gi');
        text = text.replace(pattern, '<mark>$1</mark>');
      } catch(e) {
        console.error(e);
      }
    });

    return (
      <span dangerouslySetInnerHTML={{ __html: text }}></span>
    );
  }
});

module.exports = HighlightedText;
