import { put, takeLatest, all } from "redux-saga/effects";
const API_KEY = "0c34a33172d004b0bcfb773e";

function* convertCurrency({ payload }) {
  const { basecurrency, targetcurrency, amount } = payload;
  const response = yield fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${basecurrency}/${targetcurrency}/${amount}`
  ).then((response) => response.json());
  if(response.result!=="error"){
  yield put({ type: "GET_CURRENCY_RECEIVED", payload: response });
  yield put({ type: "CHANGE_CONVERT_STATUS",payload: true});
  }
  else{
    yield put({ type: "CHANGE_CONVERT_STATUS",payload: false});
  }
}

function* getExchangeRates({ payload }) {
  const { basecurrency } = payload;
  const response = yield fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${basecurrency}`
  ).then((response) => response.json());
  if(response.result!=="error"){
  yield put({ type: "EXCHANGE_RATE_RECEIVED", payload: response.conversion_rates });
  yield put({ type: "CHANGE_EXCHANGE_STATUS",payload: true});
  }
  else{
    yield put({ type: "CHANGE_EXCHANGE_STATUS",payload: false});
  }
  
}

function* actionWatcher() {
  yield takeLatest("CONVERT_CURRENCY", convertCurrency);
  yield takeLatest("GET_EXCHANGE_RATE", getExchangeRates);

}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
