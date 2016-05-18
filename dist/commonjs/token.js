'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Token = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transforms = require('./utils/transforms');

var _pad = require('./utils/pad');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = exports.Token = function () {
    function Token() {
        var tokenLength = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];

        _classCallCheck(this, Token);

        if (typeof tokenLength !== 'number') throw new TypeError('The first argument (Token length) should be a number');

        this.tokenLength = tokenLength;

        this._alphabet = '0123456789ACDEFGHJKLMNPQRTUVWXYZ';
        this._maxSeed = Math.pow(this._alphabet.length, this.tokenLength);

        this.regenerate();
    }

    _createClass(Token, [{
        key: 'toString',
        value: function toString() {
            return this.token;
        }
    }, {
        key: '_generateSeed',
        value: function _generateSeed() {
            this._seed = Math.floor(Math.random() * this._maxSeed);
        }
    }, {
        key: '_generateToken',
        value: function _generateToken() {
            var notPaddedToken = (0, _transforms.toAlphabet)(this._seed, this._alphabet);
            this.token = (0, _pad.pad)(notPaddedToken, this.tokenLength, '0');
        }
    }, {
        key: 'regenerate',
        value: function regenerate() {
            this._generateSeed();
            this._generateToken();
        }
    }]);

    return Token;
}();