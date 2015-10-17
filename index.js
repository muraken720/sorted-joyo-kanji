/**
 * @author Kenichiro Murata
 * @copyright 2015 Kenichiro Murata
 * @license MIT
 */

'use strict'

/**
 * Dependencies.
 */
var joyoKanji = require('joyo-kanji').kanji
var codePoint = require('code-point')
var SortedArray = require('sorted-array')
var each = require('amp-each')

/*
 * Setup.
 */
var sortedJoyoKanji = SortedArray.comparing((item) => {
  return codePoint(item)
}, joyoKanji)

var sortedCodePoint = new SortedArray([])
each(sortedJoyoKanji.array, (item) => {
  return sortedCodePoint.insert(codePoint(item))
})

/*
 * Expose.
 */
module.exports = {
  kanji: sortedJoyoKanji.array,
  codepoint: sortedCodePoint.array,
  isJoyo (value) {
    return sortedCodePoint.search(codePoint(value)) !== -1
  }
}
