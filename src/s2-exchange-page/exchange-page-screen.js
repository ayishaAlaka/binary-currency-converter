import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { AppWrapper, StyledTable } from "../styled-component/styles";
import { currencyList } from "../const/currencylist";
import { getExchangeRates } from '../actions';

const ExchangePage = (props) => {
  const base = localStorage.getItem("base");
  const [basecurrency, setBaseCurrency] = useState(base ? base : "");
  const [errors, setError] = useState([]);

  const dispatch = useDispatch();
  const exchange = useSelector((state) => state.exchange)
  const exchangeRates= useSelector((state) => state.exchangeRates)

  const onChangeCurrency = (value) => {
    if (value !== base) {
      setBaseCurrency(value);
      localStorage.setItem("base", value);
    }
    else{
      setBaseCurrency(value);
    }
  };

  const handleExchange = () => {
    let errors = [];
    if (basecurrency === "") {
      errors.push("basecurrency");
    }

  if(errors.length === 0) {
    dispatch(getExchangeRates({ basecurrency}))
      setError([]);
    }
    if (errors.length > 0) {
      setError(errors);
    }
  };


  const hasError = (key) => {
    return errors.indexOf(key) !== -1;
  };

  return (
    <AppWrapper>
      <div className="row mb-5">
        <div className="col">
          <label className="small">Base currency</label>
          {!exchange &&  <p className="error">API CALL FAILED</p>}
          <select
            className="form-control"
            name="currency"
            onChange={(e) => onChangeCurrency(e.target.value)}
            value={basecurrency}
          >
            <option>Select</option>
            {currencyList.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.currencyName}
              </option>
            ))}
          </select>
          {hasError("basecurrency") && (
              <p className="error">Please Select Currency</p>
            )}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <button className="btn btn-info mb-3" onClick={handleExchange}>GET EXCHANGE RATE</button>
        </div>
      </div>
      <div className="row mb-2 justify-content-center ">
        <div className="col-auto">
          {exchangeRates.length!==0 &&
          <StyledTable>
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th scope="col">Currency</th>
                  <th scope="col">Exchange-Rate</th>
                </tr>
              </thead>
              <tbody>
              {Object.keys(exchangeRates).map(key =>{
              return(
                <tr>
                  <th scope="row">{key}</th>
                  <td>{exchangeRates[key]}</td>
                </tr>
              )})}
              </tbody>
            </table>
          </StyledTable>
}
        </div>
      </div>
    </AppWrapper>
  );
};

export default ExchangePage;
