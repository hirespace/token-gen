// O(log n) string padding
export function pad(str, digits, padder) {
    if (! padder || typeof padder != 'string')
        padder = '0';
    else
        padder = padder.charAt(0);

    digits = digits - str.length;

    while (digits > 0) {
        if (digits & 1) str = padder + str;
        padder += padder;
        digits >>= 1;
    }

    return str;
}
