import React from 'react';
import HomePage from "./s1-home-page/Home-page-screen"
import ExchangePage from "./s2-exchange-page/exchange-page-screen"
import {Route, Routes } from "react-router-dom";
import Header from './components/header'


let App = () => (
  <div className="App">
    <Header/>
    <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="/exchange" element={<ExchangePage />}/>
    </Routes>
</div>
);


export default App;
