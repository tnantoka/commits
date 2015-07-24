# Commits

Search [Rails](https://github.com/rails/rails) commit logs powered by [Grommet](https://github.com/HewlettPackard/grommet), [React](https://github.com/facebook/react), [lunr](https://github.com/olivernn/lunr.js) and [Electron](https://github.com/atom/electron). Work in progress.

https://commits.parseapp.com/

## Development

### Server

```
$ gulp dev
```

### Deploy

```
$ bundle exec rake TRUNCATE=1
$ gulp dist
$ parse deploy
```

### Repos

```
# Update
$ bundle exec rake clone

# Index
$ bundle exec rake
```

### Electron

```
$ bundle exec rake
$ gulp dist

# Run
$ electron .

# Package
$ electron-packager . commits --platform=darwin --arch=x64 --version=0.30.0 --overwrite
```

