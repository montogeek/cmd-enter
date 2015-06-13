'use strict'

var cmdenter = new CmdEnter('form#demo textarea')

describe('CmdEnter', function() {
  it('should attach event listener to textarea element', function() {
    assert(typeof cmdenter.textAreaElement.onkeydown !== 'undefined')
  })
})
