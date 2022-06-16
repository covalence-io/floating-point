import DecimalType from 'decimal.js';

declare global {
    interface Window {
        Decimal: typeof DecimalType;
    }
}