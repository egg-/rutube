# rutube

[![version](https://img.shields.io/npm/v/rutube.svg) ![download](https://img.shields.io/npm/dm/rutube.svg)](https://www.npmjs.com/package/rutube)

Rutube api implement for nodejs. (ref: http://rutube.ru/info/to_developers)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Usage

```javascript
var rutube = require('./index')

rutube.searchVideo({
  page: 1,
  limit: 5,
  query: 'ted',
  filter: {
    created: 'week',
    author_id: 1001378,
    category_id: 8,
    duration: 'medium'
  // only_hd: true
  },
  short: 'created'
}, function (err, result) {
  console.log(err, result)
})

```

## Search
### video [#](documentation.md#Rutube+searchVideo)
```javascript
rutube.searchVideo({
  page: 1,
  limit: 5,
  query: 'ted'
}, function (err, result) {
  console.log(err, result)
})
```

## Documentation

See the [documentation](Documentation.md)

## Release History

See the [changelog](CHANGELOG.md)


## LICENSE

rutube is licensed under the MIT license.
