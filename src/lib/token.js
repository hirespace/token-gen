import { toAlphabet } from './utils/transforms';
import { pad } from './utils/pad';
import _ from 'lodash';

const DEFAULT_OPTIONS = {
    tokenLength: 5,
    alphabet: '0123456789ACDEFGHJKLMNPQRTUVWXYZ'
}

export class Token {
    constructor(options = {}) {
        if (typeof options === 'number')
            this.config({ tokenLength: options });
        else if (typeof options === 'object')
            this.config(options);
        else
            throw new TypeError(
                'The first argument should be an object or a number (token length)'
            );
    }

    config(options) {
        if (typeof options === 'object')
            this.options = _.extend(DEFAULT_OPTIONS, options);
        else
            throw new TypeError(
                'The first argument should be an object with the options'
            );

        let alphabetLength = this.options.alphabet.length;
        this._maxSeed = Math.pow(alphabetLength, this.options.tokenLength);

        this.regenerate();
    }

    toString() {
        return this.token;
    }

    _generateSeed() {
        this._seed = Math.floor(Math.random() * this._maxSeed);
    }

    _generateToken() {
        let notPaddedToken = toAlphabet(this._seed, this.options.alphabet);
        this.token = pad(notPaddedToken, this.options.tokenLength, '0');
    }

    regenerate() {
        this._generateSeed();
        this._generateToken();
    }
}
