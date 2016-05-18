'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._pad = exports._toAlphabet = exports.Token = exports.default = undefined;

var _transforms = require('./utils/transforms');

var _pad = require('./utils/pad');

var _token = require('./token');

var TokenGen = function TokenGen(options) {
    return new TokenGen.Token(options);
};

TokenGen.Token = _token.Token;
TokenGen._pad = _pad.pad;
TokenGen._toAlphabet = _transforms.toAlphabet;

exports.default = TokenGen;
exports.Token = _token.Token;
exports._toAlphabet = _transforms.toAlphabet;
exports._pad = _pad.pad;