'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._pad = exports._toAlphabet = exports.Token = exports.default = undefined;

var _transforms = require('./utils/transforms');

var _pad = require('./utils/pad');

var _token = require('./token');

var TokenGen = {
    Token: _token.Token,
    _toAlphabet: _transforms.toAlphabet,
    _pad: _pad.pad
};

exports.default = TokenGen;
exports.Token = _token.Token;
exports._toAlphabet = _transforms.toAlphabet;
exports._pad = _pad.pad;