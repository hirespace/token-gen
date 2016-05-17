[![Build Status](https://travis-ci.org/hirespace/codegen.svg?branch=master)](https://travis-ci.org/hirespace/codegen)

# Codegen
Codegen is a small library that will allow you to generate human readable
codes for your voucher codes, keys, etc.

# Installation

## NPM
```
npm install codegen
```

## Meteor
Just add the package from atmosphere:

```
meteor add codegen
```

# Usage
The most common usage would be:

```javascript
var code = new Codegen.Code();

console.log(code); // "48CMLN0000"
```

## Custom length
The library allows customising the character length of the generated code:

```javascript
var code = new Codegen.Code(5);

console.log(code); // "DP5A9"
```

The default length is 10 characters. It is warrantied that the length will
be the given character length.


# License
Made by Hire Space (hirespace.com) and distributed using a ISC license.
