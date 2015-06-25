var React = require('react');

var App = require('grommet/components/App');
var Search = require('grommet/components/Search');
var Header = require('grommet/components/Header');
var SearchIcon = require('grommet/components/icons/Search');

var CommitsTable = require('./CommitsTable');

var repos = require('./../repos');
var builder = require('./../index_builder');
var idx = builder.build();

var Main = React.createClass({
  getInitialState: function() {
    return {
      query: '',
      commits: []
    };
  },
  onChange: function(query) {
    var commits = idx.search(query).map(function(result) {
      return repos['rails/rails'][result.ref];
    });
    this.setState({ 
      query: query,
      commits: commits
    });
  },
  render: function() {
    return (
      <App centered={false}>
        <Header>
          <span>
            <SearchIcon />
            <Search inline={true} onChange={this.onChange} />
          </span>
        </Header>
        <CommitsTable commits={this.state.commits} query={this.state.query} />
      </App>
    );
  }
});

module.exports = Main;
