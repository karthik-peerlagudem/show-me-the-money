/**
 * Formats a numeric string or number into Australian Dollar currency format
 *
 * @function formatCurrency
 * @param {string} value - The numeric string to format
 * @returns {string} Formatted currency string with AUD symbol and 2 decimal places
 *
 * @locale en-AU
 * @currency AUD
 */
export const formatCurrency = (value: string): string => {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(numericValue)) {
        return value;
    }

    return new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(numericValue);
};
