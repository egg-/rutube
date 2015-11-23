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
