var React = require('react');
var Table = require('grommet/components/Table');
var HighlightedText = require('./HighlightedText');

var CommitsTable = React.createClass({

  render: function () {

    var self = this;
    var rows = this.props.commits.map(function(commit) {
      var url = 'https://github.com/' + commit.r + '/commit/' + commit.o;

      return (
        <tr key={commit.o}>
          <td>
            <HighlightedText text={commit.m} query={self.props.query} />
          </td>
          <td>
            <a href={url} target="_blank">
              {commit.r}#{commit.o}
            </a>
          </td>
        </tr>
      );
    });

    return (
      <Table>
        <tbody>
          {rows}
        </tbody>
      </Table>
    );
  }
});

module.exports = CommitsTable;
