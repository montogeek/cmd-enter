# CmdEnter.js

Submit any form with (Cmd | Win | Ctrl) + Enter.

## Why?

Submit forms using Cmd + Enter (Mac) or Win + Ctrl (Windows) is a well known key combination that you may already use on Twitter, GitHub, Facebook, and another mayor sites.

It's great because is faster than move your mouse or hit tab to reach the submit button, you can save a few key strokes!.

## Demo

[See it in action!](https://montogeek.github.io/cmd-enter/).

## Installation

You can install it from npm

    $ npm install cmdenter

## Usage

Just create a new CmdEnter.js instance and you are ready to go

```javascript
<script>
  new CmdEnter();
</script>
```

This will bind the `cmd + enter` key combination to all `textarea` elements on the page. Optionally you can specify a CSS selector as first parameter. Example:
```javascript
<script>
  new CmdEnter('.comment')
  new CmdEnter('#description')
  new CmdEnter('form#register textarea')
</script>
```

## Browser Support

- All modern browsers

## Made to you by
[Fernando Montoya](http://github.com/montogeek) (FrontEnd developer)

[@montogeek](http://twitter.com/montogeek)

## License
MIT.