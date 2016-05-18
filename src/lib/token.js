import { toAlphabet } from './utils/transforms';
import { pad } from './utils/pad';

export class Token {
    constructor(tokenLength = 5) {
        if (typeof tokenLength !== 'number')
            throw new TypeError(
                'The first argument (Token length) should be a number'
            );

        this.tokenLength = tokenLength;

        this._alphabet = '0123456789ACDEFGHJKLMNPQRTUVWXYZ';
        this._maxSeed = Math.pow(this._alphabet.length, this.tokenLength);

        this.regenerate();
    }

    toString() {
        return this.token;
    }

    _generateSeed() {
        this._seed = Math.floor(Math.random() * this._maxSeed);
    }

    _generateToken() {
        let notPaddedToken = toAlphabet(this._seed, this._alphabet);
        this.token = pad(notPaddedToken, this.tokenLength, '0');
    }

    regenerate() {
        this._generateSeed();
        this._generateToken();
    }
}
