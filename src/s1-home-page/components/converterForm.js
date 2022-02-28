import React, { useState } from "react";
import { currencyList } from "../../const/currencylist";

const ConverterForm = ({ getResult, convert,exchangeData }) => {
  const base = localStorage.getItem("base");

  const [basecurrency, setBasecurrencyValue] = useState(base ? base : "");
  const [targetcurrency, setTargetcurrencyvalue] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setError] = useState([]);

  const onChangeCurrency = (value) => {
    if (value !== base) {
      setBasecurrencyValue(value);
      localStorage.setItem("base", value);
    }
  };

  const handleConvert = () => {
    const numbers = /^[0-9]+$/;
    let errors = [];
    if (basecurrency === "") {
      errors.push("basecurrency");
    }
    if (targetcurrency === "") {
      errors.push("targetcurrency");
    }
    if (amount === "" || !amount.match(numbers)) {
      errors.push("amount");
    }
    if (errors.length === 0) {
      getResult({ basecurrency, targetcurrency, amount });
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
    <div className="content">
      <h3 className="text-center">Currency Converter</h3>
      <hr />
      {!convert &&  <p className="error">API CALL FAILED</p>}
      {convert && exchangeData && (
        <div className="mb-4">
          <p className="text-secondary">{amount} {exchangeData.base_code}</p>
          <h2>{exchangeData.conversion_result} {exchangeData.target_code}</h2>
        </div>
      )}
      <div className="form-group">
        <div className="row mb-2">
          <div className="col">
            <label className="small">Base Currency</label>
            <select
              className="form-control"
              name="basecurrency"
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
          <div className="col">
            <label className="small">Target Currency</label>
            <select
              className="form-control"
              name="targetcurrency"
              onChange={(e) => setTargetcurrencyvalue(e.target.value)}
              value={targetcurrency}
            >
              <option>Select</option>
              {currencyList.map((currency) => (
                <option key={currency.id} value={currency.id}>
                  {currency.currencyName}
                </option>
              ))}
            </select>
            {hasError("targetcurrency") && (
              <p className="error">Please Select Currency</p>
            )}
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="small">Amount</label>
        <input
          className="form-control"
          name="amount"
          onChange={(e) => setAmount(e.target.value)}
          type="text"
          autoComplete="off"
          value={amount}
        />
        {hasError("amount") && <p className="error">Please Enter valid Amount</p>}
      </div>
      <button className="btn btn-info mb-3" onClick={handleConvert}>
        Convert
      </button>
    </div>
  );
};

export default ConverterForm;
