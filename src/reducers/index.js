const initialState = {
  exchangeValues: null,
  exchangeData: null,
  convert: true,
  baseData: null,
  exchangeRates: [],
  exchange:true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONVERT_CURRENCY":
      return { ...state, exchangeValues: action.payload, loading: true };
    case "GET_CURRENCY_RECEIVED":
      return { ...state, exchangeData: action.payload, loading: false };
    case "CHANGE_CONVERT_STATUS":
      return { ...state, convert: action.payload, loading: false };
    case "GET_EXCHANGE_RATE":
      return { ...state, baseData: action.payload, loading: true };
    case "EXCHANGE_RATE_RECEIVED":
      return { ...state, exchangeRates: action.payload, loading: false };
      case "CHANGE_EXCHANGE_STATUS":
        return { ...state, exchange: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
