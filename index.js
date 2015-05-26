'use strict'

function CmdEnter(form, textarea) {

  var formElement = document.querySelector(form);
  var textareaElement = document.querySelector(textarea);

  // Check compatibility
  textareaElement.addEventListener('keyup', function(event) {
    // Check for metaKey, should be compatible with Windows, Linux and MacOSX.
    if(event.keyCode === 13) {
      formElement.submit();
    }
  });
}

module.exports = CmdEnter;