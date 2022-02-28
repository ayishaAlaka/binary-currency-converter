export const convertCurrency = (data) => ({
    type: 'CONVERT_CURRENCY',
    payload: data,
  });

  export const getExchangeRates = (data) => ({
    type: 'GET_EXCHANGE_RATE',
    payload: data,
  });