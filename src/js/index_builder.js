var lunr = require('lunr');

function build() {
  var idx = lunr(function() {
    this.ref('o');

    this.field('m', { boost: 10 });
    this.field('r');
  });

  var repos = require('./repos');
  var commits = [];
  for (var repo in repos) {
    for (var commit in repos[repo]) {
      var c = repos[repo][commit];
      c.o = commit;
      c.r = repo;
      commits.push(c);
    }
  }

  commits.forEach(function (commit) {
    idx.add(commit);
  });

  return idx;
}

module.exports = {
  build: build
};

