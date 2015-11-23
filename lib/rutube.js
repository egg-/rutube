/**
 * rutube
 * @class Rutube
 * @description
 * Rutube api implement for nodejs
 */

/** @private */
var request = require('request')

var Rutube = function () {
  /**
   * rutube api url
   * @member url
   * @type {string}
   */
  this.url = 'http://rutube.ru/api/'
}

/**
 * request
 * @method request
 * @memberof Rutube.prototype
 * @param  {string} uri
 * @param  {object} opts
 * @param  {string} opts.method `POST`, `GET` default is `GET`
 * @param  {object} opts.data
 * @param  {Function} cb function(err, data)
 */
Rutube.prototype.request = function (uri, opts, cb) {
  var param = {}

  param.url = this.url + uri
  param.method = opts.method || 'GET'

  opts.data = opts.data || {}
  opts.data.format = opts.data.format || 'json'

  if (param.method === 'GET') {
    param.qs = opts.data
  } else if (opts.json) {
    // Content-type: application/json
    param.json = true
    param.body = JSON.stringify(opts.data)
  } else {
    // Content-type: application/x-www-form-urlencoded
    param.form = opts.data
  }

  return request(param, function (err, res, body) {
    if (err) {
      return cb(err)
    }

    try {
      cb(null, JSON.parse(body))
    } catch (e) {
      cb(e)
    }
  })
}

/**
 * search videos
 * @link http://rutube.ru/info/to_developers/#item10
 * @method searchVideo
 * @memberof Rutube.prototype
 * @param  {object} opts
 * @param  {string} opts.query
 * @param  {number} [opts.page] default 1
 * @param  {number} [opts.limit] default 10
 * @param  {object} [opts.filter]
 * @param  {number} [opts.filter.author_id]
 * @param  {string} [opts.filter.tag_id]
 * @param  {number} [opts.filter.category_id]
 * @param  {string} [opts.filter.duration] `short`, `medium`, `long` (5 mins, 5 to 20 mins, 20 mins)
 * @param  {string}[opts.filter.created] `week`, `month`, `year`
 * @param  {boolean}[opts.filter.only_hd]
 * @param  {boolean}[opts.filter.no_adult]
 * @param  {number} [opts.sort] `rank`, `hits`, `created` (revelance,  viewed, creation data)
 * @param  {Function} cb function(err, result)
 */
Rutube.prototype.searchVideo = function (opts, cb) {
  var data = {}

  opts.filter = opts.filter || {}

  data.page = parseInt(opts.page || 1, 10)
  data.limit = parseInt(opts.limit || 10, 10)
  data.query = opts.query || ''

  if (opts.filter.author_id) {
    data.author_id = opts.filter.author_id
  }
  if (opts.filter.tag_id) {
    data.tag_id = opts.filter.tag_id
  }
  if (opts.filter.category_id) {
    data.category_id = opts.filter.category_id
  }
  if (opts.filter.duration && ['short', 'medium', 'long'].indexOf(opts.filter.duration) !== -1) {
    data.duration = opts.filter.duration
  }
  if (opts.filter.created && ['week', 'month', 'year'].indexOf(opts.filter.created) !== -1) {
    data.created = opts.filter.created
  }
  if (opts.filter.only_hd) {
    data.only_hd = 'checked'
  }
  if (opts.filter.no_adult) {
    data.no_adult = 'checked'
  }

  this.request('search/video/', {
    data: data
  }, function (err, result) {
    if (err) {
      return cb(err)
    }
    cb(null, {
      count: result.count,
      page: result.page,
      limit: result.per_page,
      items: result.results
    })
  })
}

module.exports = new Rutube()
