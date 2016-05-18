'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Token = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transforms = require('./utils/transforms');

var _pad = require('./utils/pad');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_OPTIONS = {
    tokenLength: 5,
    alphabet: '0123456789ACDEFGHJKLMNPQRTUVWXYZ'
};

var Token = exports.Token = function () {
    function Token() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Token);

        if (typeof options === 'number') this.config({ tokenLength: options });else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') this.config(options);else throw new TypeError('The first argument should be an object or a number (token length)');
    }

    _createClass(Token, [{
        key: 'config',
        value: function config(options) {
            if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') this.options = _lodash2.default.extend(DEFAULT_OPTIONS, options);else throw new TypeError('The first argument should be an object with the options');

            var alphabetLength = this.options.alphabet.length;
            this._maxSeed = Math.pow(alphabetLength, this.options.tokenLength);

            this.regenerate();
        }
    }, {
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
            var notPaddedToken = (0, _transforms.toAlphabet)(this._seed, this.options.alphabet);
            this.token = (0, _pad.pad)(notPaddedToken, this.options.tokenLength, '0');
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