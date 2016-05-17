import { toAlphabet } from './utils/transforms';
import { pad } from './utils/pad';
import { Code } from './code';

const _Codegen = {
    Code,
    _toAlphabet: toAlphabet,
    _pad: pad
}

Codegen = _Codegen;

export {
    _Codegen as default,
    Code,
    toAlphabet as _toAlphabet,
    pad as _pad
}
