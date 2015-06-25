require 'bundler'
Bundler.require

require 'fileutils'
require 'json'

REPOS = [
  { owner: 'rails', repo: 'rails' }  
] 

task default: :index

task :clone do
  FileUtils.mkdir_p('repos')
  REPOS.each do |r|
    command = "cd repos; git clone git@github.com:#{r[:owner]}/#{r[:repo]}.git; cd #{r[:repo]}; git pull origin master"
    puts "$ #{command}"
    `#{command}`
  end
end

task :index do
  repos = {}
  REPOS.each do |r|
    commits = {}
    repo = Rugged::Repository.new("repos/#{r[:repo]}")
    walker = Rugged::Walker.new(repo)
    #walker.sorting(Rugged::SORT_TOPO | Rugged::SORT_REVERSE)
    walker.sorting(Rugged::SORT_TOPO)
    walker.push(repo.last_commit)
    walker.each_with_index do |c, i|
      next if c.message =~ /\AMerge pull request/
      next if c.message =~ /\AMerge branch/
      next if c.message =~ /\ARevert/
      next if c.message =~ /\Agit-svn-id/
      commits[c.oid[0..9]] = {
        m: c.message.split(/\n/).first,
      }
      break if i > 1000
    end
    repos["#{r[:owner]}/#{r[:repo]}"] = commits
  end
  json = JSON.pretty_generate(repos)
  File.write('src/js/repos.js', "module.exports = #{json};\n")

  `node prebuild.js`
end
