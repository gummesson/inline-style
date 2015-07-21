/*!
 * Dependencies
 */

var test = require('tape')
var inlineStyle = require('../')

/*!
 * Tests
 */

test('inlineStyle([obj])', function(t) {
  t.test('inlineStyle()', function(assert) {
    var style = inlineStyle()
    assert.equal(style, null)
    assert.end()
  })

  t.test('inlineStyle(obj)', function(assert) {
    var style = inlineStyle({
      fontSize: '0.875rem',
      color: '#aaa'
    })
    assert.equal(style, 'font-size:0.875rem;color:#aaa')
    assert.end()
  })
})
