[![Build Status](https://travis-ci.org/hirespace/token-gen.svg?branch=master)](https://travis-ci.org/hirespace/token-gen)

# TokenGen
TokenGen is a small library that will allow you to generate human readable
codes for your voucher codes, keys, etc.

# Installation

## NPM
```
npm install token-gen
```

## Meteor < 1.3 (legacy)
Just add the package from atmosphere:

```
meteor add hirespace:token-gen
```

# Usage
The most common usage would be:

```javascript
import TokenGen from 'token-gen'; // var TokenGen = require('token-gen');

var code = TokenGen();

console.log(code.toString()); // "48CML"
```

# Options
The generated code can be customised passing an options object to the
constructor:

```javascript
var code = TokenGen({
    tokenLength: 3, // Default: 5
    alphabet: 'ABC' // Default: '0123456789ACDEFGHJKLMNPQRTUVWXYZ'
});

console.log(code.toString()); // "BBA"
```

## Full list of options
### tokenLength
It's the generated code character length.

* default: `5`

**Note:** The amount of different codes you could generate is
`alphabetLength ^ codeLength`. Therefore, with the default
alphabet, the maximum amount of different
codes with a 5 characters code is 33554432. We found 33 million codes is more
than enough for most usages. If you need more, the code
length can be customised.

As this is the most common option, it is possible to call the generator
directly with a number, which represents the tokenLength:

```javascript
var code = TokenGen(3);

console.log(code.toString()); // "20A"
```

### alphabet
The character included in this string will be the only characters used
to generate the code. The generated codes are any combination of these
characters.

* default: `0123456789ACDEFGHJKLMNPQRTUVWXYZ`

We use a default alphabet composed of
32 characters that are not confusing to read (e.g. we removed B because it
could be confused with an 8).


# License
Made with :heart: by Hire Space ([hirespace.com](https://www.hirespace.com))
and distributed using a ISC license.
