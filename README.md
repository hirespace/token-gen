[![Build Status](https://travis-ci.org/hirespace/codegen.svg?branch=master)](https://travis-ci.org/hirespace/codegen)

# Codegen
Codegen is a small library that will allow you to generate human readable
codes for your voucher codes, keys, etc.

# Installation

## NPM
```
npm install hs-codegen
```

## Meteor
Just add the package from atmosphere:

```
meteor add hirespace:codegen
```

# Usage
The most common usage would be:

```javascript
var code = new Codegen.Code();

console.log(code); // "48CML"
```

The amount of different codes you could generate is
`alphabetLength ^ codeLength`. We use a default alphabet composed of
32 characters (`0123456789ACDEFGHJKLMNPQRTUVWXYZ`) that are
not confusing to read (e.g. we removed B because it
could be confused with an 8). Therefore, the maximum amount of different
codes with a 5 characters code is 33554432. This is more than enough for
most usages. If you need more, the code length can be customised.

## Custom length
The library allows customising the character length of the generated code:

```javascript
var code = new Codegen.Code(3);

console.log(code); // "DP5"
```

The default length is 10 characters. It is warrantied that the length will
be the given character length.


# License
Made with :heart: by Hire Space ([hirespace.com](https://www.hirespace.com)) and distributed using a ISC license.
