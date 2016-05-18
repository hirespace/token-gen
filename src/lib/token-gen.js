import { toAlphabet } from './utils/transforms';
import { pad } from './utils/pad';
import { Token } from './token';

const TokenGen = {
    Token,
    _toAlphabet: toAlphabet,
    _pad: pad
}

export {
    TokenGen as default,
    Token,
    toAlphabet as _toAlphabet,
    pad as _pad
}
