'use strict'

function CmdEnter(textarea) {
  this.textAreaElement = {}

  this.textAreaElement = (typeof textarea === 'undefined') ? document.querySelector('textarea') : document.querySelector(textarea)

  this.textAreaElement.onkeydown = function(event) {
    if(event.keyCode === 13 && (event.ctrlKey || event.metaKey)) {
      this.form.submit()
    }
  }
}

module.exports = CmdEnter
