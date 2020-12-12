import React, { useState } from "react";
import "./styles.css";

const allStocks = {
  ALL: [
    "MARICO : 9/10 ",
    "ITC : 8/10 ",
    "INFOSYS : 7/10 ",
    "DIVISLAB : 6/10 ",
    "RELAXO : 5/10 "
  ],

  FMCG: ["MARICO ", "ITC "],

  IT: "INFOSYS",

  PHARMA: "DIVISLAB",

  FINANCE: "HDFC",

  OG: "INDRAPRASTHA GAS",

  OTHERS: "RELAXO"
};

var setShare = Object.keys(allStocks);

export default function App() {
  const [nStock, currentStock] = useState("");
  const [nRate, currentRate] = useState("");
  function clickStocks(stock) {
    var nStock = allStocks[stock];
    currentStock(nStock);
  }
  return (
    <div className="App">
      <h1>Stocks Analysis App</h1>
      <hr></hr>

      {setShare.map(function (stock) {
        return (
          <button
            className="btn"
            onClick={() => clickStocks(stock)}
            style={{ cursor: "pointer", padding: ".5rem", margin: ".5rem" }}
          >
            {" "}
            {stock}{" "}
          </button>
        );
      })}
      <hr></hr>
      <h3 style={{ border: "solid black" }}>{nStock}</h3>
    </div>
  );
}
