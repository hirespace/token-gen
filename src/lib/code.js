import { toAlphabet } from './utils/transforms';
import { pad } from './utils/pad';

export class Code {
    constructor(codeLength = 10) {
        if (typeof codeLength !== 'number')
            throw new TypeError(
                'The first argument (Code length) should be a number'
            );

        this.codeLength = codeLength;

        this._alphabet = '0123456789ACDEFGHJKLMNPQRTUVWXYZ';
        this._maxSeed = Math.pow(this._alphabet.length, this.codeLength);

        this.regenerate();
    }

    toString() {
        return this._code;
    }

    _generateSeed() {
        this._seed = Math.floor(Math.random() * this._maxSeed);
    }

    _generateCode() {
        let notPaddedCode = toAlphabet(this._seed, this._alphabet);
        this._code = pad(notPaddedCode, this.codeLength, '0');
    }

    regenerate() {
        this._generateSeed();
        this._generateCode();
    }
}
