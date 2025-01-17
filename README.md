<center>
<h1>
⚠️⚠️⚠️
dangerously-set-html-content
⚠️⚠️⚠️
</h1>
</center>

> Render raw html at your own risk!

[![NPM](https://img.shields.io/npm/v/dangerously-set-html-content.svg)](https://www.npmjs.com/package/dangerously-set-html-content) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

- [Dangerously-set-html-content v1 Repo](https://github.com/christo-pr/dangerously-set-html-content-v1)

## Context

Here's a blog post that explain more in detail:

- [Render dangerous content with React](https://dev.to/christo_pr/render-dangerous-content-with-react-2j7j)

## TL;DR

React uses `dangerouslySetInnerHtml` prop to render raw html, and works pretty much well for almost all the cases, but what if your html has some `scripts` tags inside??

When you use `dangerouslySetInnerHtml` on a component, internally react is using the `innerHtml` property of the node to set the content, which for [safety purposes](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations) doesn't execute any javascript.

This behavior seemed very odd to me (I mean the prop name contains the word `dangerously`, and also you need to pass an object with a `__html` propery, which is on purpose, so you really know what you doing), although has totally sense now, still doesn't solve my issue

After a little bit of search I found that the `document` has something called [Range](https://developer.mozilla.org/en-US/docs/Web/API/Range), this API let you create a fragment of the document, so using that I created `dangerously-set-html-content`.

This React component renders html from a string, with the plus of executing all the js code that html contains!! 🎉

🚨🚨 **USE IT AT YOUR OWN RISK** 🚨🚨

## Install

```bash
yarn add dangerously-set-html-content
// or
// npm install --save dangerously-set-html-content
```

## Usage

```jsx
import React from 'react'

import InnerHTML from 'dangerously-set-html-content'

function Example {

  const html = `
    <div>This wil be rendered</div>
    <script>
      alert('testing')
    </script>

  `

  return (
    <InnerHTML html={html} />
  )
}
```

This will also work for scripts with the `src` attribute set it

## Development

Run `nx run test-app:serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

> The demo app has already imported the lib for testing purposes

## Running unit & e2e tests

Run `nx test` to execute the unit tests via [Jest](https://jestjs.io).

## License

MIT © [christo-pr](https://github.com/christo-pr)
