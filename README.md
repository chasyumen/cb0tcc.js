# cb0tcc.js

[![TotalDownloads](https://img.shields.io/npm/dt/cb0tcc)](https://npmjs.com/package/cb0tcc) [![GitHub commit activity m](https://img.shields.io/github/commit-activity/m/chasyumen/cb0tcc.js)](https://github.com/chasyumen/cb0tcc.js) [![Node.js CI](https://github.com/chasyumen/cb0tcc.js/actions/workflows/node.js.yml/badge.svg)](https://github.com/chasyumen/cb0tcc.js/actions/workflows/node.js.yml) [![License](https://img.shields.io/npm/l/cb0tcc)](https://github.com/chasyumen/cb0tcc.js/blob/main/LICENSE)

An official [cb0t.cc](https://cbot.cc/) api package.

## install

```
npm i cb0tcc
```

## Usage

### shorten(url)

Function

#### URL

The url to create shortened url.

```js
shorten(`https://google.com`)
```

#### returns

Object

```js
{
  url: String, //URL (E.g.: "https://cb0t.cc/1")
  code: String, //code (E.g.: "1")
  message: String //message (E.g.: "URL Created: https://cb0t.cc/1")
}
```

## Example usage

```js
const { shorten } = require("cb0tcc");

shorten(`https://google.com`);
```


## License
© chasyumen 2021. Released under the MIT license


