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
  if (!obj) return null

  var props = Object.keys(obj)
  var styles = []

  props.forEach(function(key) {
    var prop = dashify(key)
    var line = prop.concat(':').concat(obj[key])
    styles.push(line)
  })

  return styles.join(';')
}
