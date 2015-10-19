'use strict'

var assert = require('power-assert')

var joyoKanji = require('../src')

var each = require('amp-each')
var codePoint = require('code-point')

describe('JoyoKanjiTest', () => {
  it('array length check', () => {
    var kanji = joyoKanji.kanji
    var codepoint = joyoKanji.codepoint

    assert(kanji.length === 2136)
    assert(codepoint.length === 2136)
  })

  it('array sort check', () => {
    var codepoint = joyoKanji.codepoint

    each(codepoint, (item, index) => {
      if (index < codepoint.length - 1) {
        assert(codepoint[index] < codepoint[index + 1])
      }
    })
  })

  it('array check', () => {
    var kanji = joyoKanji.kanji
    var codepoint = joyoKanji.codepoint

    each(kanji, (item, index) => {
      assert(codePoint(item) === codepoint[index])
    })
  })

  it('isJoyo', () => {
    assert(joyoKanji.isJoyo('聡') === false)
    assert(joyoKanji.isJoyo('明') === true)
    assert(joyoKanji.isJoyo('推') === true)
    assert(joyoKanji.isJoyo('敲') === false)
  })
})
