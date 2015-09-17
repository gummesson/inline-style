/*!
 * Dependencies
 */

var dashify = require('dashify')

/*!
 * Exports
 */

module.exports = inlineStyle

/**
 * Transform `obj` into an inline CSS string.
 *
 * @param {Object} obj
 * @return {String}
 */

function inlineStyle(obj) {
  if (!obj) return ''

  var props = Object.keys(obj)

  var styles = props.map(function(key) {
    var prop = dashify(key)
    var line = prop.concat(':').concat(obj[key])
    return line
  })

  return styles.join(';')
}
