# inline-style

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Transform an object into an inline CSS string.

## Installation

```
npm install inline-style
```

## Usage

``` javascript
var inlineStyle = require('inline-style')

var style = inlineStyle({
  fontSize: '0.875rem',
  color: '#aaa'
})

console.log(style) // => "font-size:0.875rem;color:#aaa"
```

## License

[MIT][license-url]

[npm-img]: https://img.shields.io/npm/v/inline-style.svg?style=flat-square
[npm-url]: https://npmjs.com/package/inline-style
[license-img]: http://img.shields.io/npm/l/inline-style.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/inline-style.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/inline-style
