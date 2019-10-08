import Numbro from './numbro';

export function formatCurrency(value, locale = 'id') {
  const numbro = Numbro(locale);
  if (value == null) {
    return undefined;
  }
  try {
    return numbro(parseFloat(value)).format({
      thousandSeparated: true,
      mantissa: 2,
    });
    // return locale
    //   ? `${locale} ${numbro(parseFloat(value)).formatCurrency()}`
    //   : numbro(parseFloat(value)).formatCurrency();
  } catch (e) {
    return value;
  }
}
