// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format

export function formatter(price, currency) {
    const formatter = new Intl.NumberFormat(
        {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0
    });

    return formatter.format(price);
}