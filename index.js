'use strict'

function CmdEnter(form, textarea) {

  var formElement = document.querySelector(form);
  var textareaElement = document.querySelector(textarea);

  // Check compatibility
  textareaElement.addEventListener('keydown', function(event) {
    // Check for metaKey, should be compatible with Windows, Linux and MacOSX.
    if(event.keyCode === 13 && (event.ctrlKey || event.metaKey)) {
      formElement.submit();
    }
  });
}