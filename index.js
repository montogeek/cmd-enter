'use strict'

function CmdEnter(textarea, form) {
  this.textAreaElement = {}
  this.formElement = {}

  this.textAreaElement = (typeof textarea === 'undefined') ? document.querySelector('textarea') : document.querySelector(textarea)

  this.formElement = (typeof form === 'undefined') ? document.querySelector('form') : document.querySelector(form)

  this.textAreaElement.onkeydown = function(event) {
    if(event.keyCode === 13 && (event.ctrlKey || event.metaKey)) {
      this.formElement.submit()
    }
  }
}

module.exports = CmdEnter
