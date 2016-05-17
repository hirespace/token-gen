/**
* Transform a number to a string using a given alphabet
*/
export function toAlphabet(num, alphabet) {
    if (typeof num !== 'number')
        throw new Error('First argument should be a number');
    if (typeof alphabet !== 'string')
        throw new Error(
            'Second argument should be a string representing' +
            'the alphabet to be used (e.g. "0123456789ACDEFGHJKLMNPQRTUVWXYZ")'
        );

    // alphabet used by toString
    const naturalAlphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let transformDictionary = {};
    let i;

    // build the transformation dictionary
    for (i = 0; i < alphabet.length; i++) {
        transformDictionary[naturalAlphabet.charAt(i)] = alphabet.charAt(i);
    }

    // generate string with natural alphabet characters but with radix of alphabet.length
    var str = num.toString(alphabet.length).toUpperCase();

    // transform natural alphabet string to desired alphabet
    str = str.replace(/./g, c => transformDictionary[c]);

    return str;
}
