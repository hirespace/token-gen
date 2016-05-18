'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toAlphabet = toAlphabet;
/**
* Transform a number to a string using a given alphabet
*/
function toAlphabet(num, alphabet) {
    if (typeof num !== 'number') throw new Error('First argument should be a number');
    if (typeof alphabet !== 'string') throw new Error('Second argument should be a string representing' + 'the alphabet to be used (e.g. "0123456789ACDEFGHJKLMNPQRTUVWXYZ")');

    // alphabet used by toString
    var naturalAlphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var transformDictionary = {};
    var i = void 0;

    // build the transformation dictionary
    for (i = 0; i < alphabet.length; i++) {
        transformDictionary[naturalAlphabet.charAt(i)] = alphabet.charAt(i);
    }

    // generate string with natural alphabet characters but with radix of alphabet.length
    var str = num.toString(alphabet.length).toUpperCase();

    // transform natural alphabet string to desired alphabet
    str = str.replace(/./g, function (c) {
        return transformDictionary[c];
    });

    return str;
}