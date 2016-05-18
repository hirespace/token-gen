import { toAlphabet } from './utils/transforms';
import { pad } from './utils/pad';
import { Token } from './token';

const TokenGen = function TokenGen(options) {
    return new TokenGen.Token(options);
}

TokenGen.Token = Token;
TokenGen._pad = pad;
TokenGen._toAlphabet = toAlphabet;

export {
    TokenGen as default,
    Token,
    toAlphabet as _toAlphabet,
    pad as _pad
}
