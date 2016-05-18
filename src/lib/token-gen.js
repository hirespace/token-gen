import { toAlphabet } from './utils/transforms';
import { pad } from './utils/pad';
import { Token } from './token';

const _TokenGen = {
    Token,
    _toAlphabet: toAlphabet,
    _pad: pad
}

TokenGen = _TokenGen;

export {
    _TokenGen as default,
    Token,
    toAlphabet as _toAlphabet,
    pad as _pad
}
