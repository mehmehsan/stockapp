import React, { useState } from "react";
import "./styles.css";

const allStockes = {
  ALL: [
    { stockee: "MARICO", rate: "9/10" },
    { stockee: "ITC", rate: " 9/10 " },
    { stockee: "INFOSYS", rate: " 9.5/10 " },
    { stockee: "WIPRO", rate: "8.5/10 " },
    { stockee: "DIVISLAB", rate: " 8.5/10 " },
    { stockee: "ASTRAZENCA", rate: "7.5/10 " },
    { stockee: "HDFC", rate: " 8.5 /10 " }
  ],

  FMCG: [
    { stockee: "MARICO ", rate: " 9/10 " },
    { stockee: "ITC ", rate: " 9/10 " }
  ],

  IT: [
    { stockee: "INFOSYS", rate: " 9.5/10 " },
    { stockee: "WIPRO", rate: "8.5/10 " }
  ],

  PHARMA: [
    { stockee: "DIVISLAB", rate: " 8.5/10 " },
    { stockee: "ASTRAZENCA", rate: "7.5/10 " }
  ],

  FINANCE: [
    { stockee: "HDFC", rate: " 8.5 /10 " },
    { stockee: "BAJAJFIN", rate: "9.5/10 " }
  ],

  OG: [
    { stockee: "INDRAPRASTHA GAS", rate: "7/10 " },
    { stockee: "RELIANCE", rate: "8/10 " }
  ],

  OTHERS: [
    { stockee: "RELAXO", rate: "7.5/10 " },
    { stockee: "BERGER", rate: "8.5/10" }
  ]
};

const allStocks = {
  ALL: [
    "MARICO : 9/10 ",
    "ITC : 8/10 ",
    "INFOSYS : 7/10 ",
    "DIVISLAB : 6/10 ",
    "RELAXO : 5/10 "
  ],

  FMCG: ["MARICO : 9/10 ", "ITC : 8/10 "],

  IT: ["INFOSYS : 9.5/10 ", "WIPRO : 8.5/10 "],

  PHARMA: ["DIVISLAB : 8.5/10 ", "ASTRAZENCA : 7.5/10 "],

  FINANCE: ["HDFC : 8.5 /10 ", "BAJAJFIN : 9.5/10 "],

  OG: ["INDRAPRASTHA GAS : 7/10 ", "RELIANCE : 8/10 "],

  OTHERS: ["RELAXO : 7.5/10 ", "BERGER : 8.5/10"]
};

var setSharee = Object.keys(allStockes);

export default function App() {
  const [nStocke, currentStocke] = useState("ALL");

  function clickStockes(stocke) {
    currentStocke(stocke);
  }

  return (
    <div className="App">
      <svg
        height="50"
        viewBox="0 0 512 512"
        width="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Fill_out_line" data-name="Fill out line">
          <path
            d="m432 112v-88h-88v32h32l-96 96-80-80-120 120 24 24 96-96 80 80 120-120v32z"
            fill="#f35244"
          />
          <path d="m160 208h32v128h-32z" fill="#4db7e5" />
          <path d="m240 232h32v40h-32z" fill="#4db7e5" />
          <path d="m320 208h32v64h-32z" fill="#4db7e5" />
          <path d="m400 144h32v128h-32z" fill="#4db7e5" />
          <path d="m112 248h-32v120l32-32z" fill="#4db7e5" />
          <path d="m40 424h80v32h-80z" fill="#fca713" />
          <path d="m104 456h80v32h-80z" fill="#fca713" />
          <path d="m104 392h80v32h-80z" fill="#fca713" />
          <path d="m200 424h80v32h-80z" fill="#fca713" />
          <g fill="#f4c067">
            <path d="m184 456h80v32h-80z" />
            <path d="m184 392h80v32h-80z" />
            <path d="m120 424h80v32h-80z" />
            <path d="m120 360h80v32h-80z" />
            <path d="m24 456h80v32h-80z" />
            <path d="m24 392h80v32h-80z" />
          </g>
          <path d="m272 424h184v64h-184z" fill="#80c326" />
          <path
            d="m434.56543 424a136.15545 136.15545 0 0 1 -110.03711 56h-52.52832v8h184v-64z"
            fill="#69a709"
          />
          <path d="m344 424h32v64h-32z" fill="#fca713" />
          <path d="m304 360h184v64h-184z" fill="#80c326" />
          <path
            d="m466.56543 360a136.15545 136.15545 0 0 1 -110.03711 56h-52.52832v8h184v-64z"
            fill="#69a709"
          />
          <path d="m376 360h32v64h-32z" fill="#fca713" />
          <path d="m272 296h184v64h-184z" fill="#80c326" />
          <path
            d="m434.56543 296a136.15545 136.15545 0 0 1 -110.03711 56h-52.52832v8h184v-64z"
            fill="#69a709"
          />
          <path d="m344 296h32v64h-32z" fill="#fca713" />
          <path d="m240 392h24v32h-24z" fill="#f5b142" />
          <path d="m256 424h24v32h-24z" fill="#ed8515" />
          <path d="m240 456h24v32h-24z" fill="#f5b142" />
          <path d="m160 456h24v32h-24z" fill="#ed8515" />
          <path d="m176 424h24v32h-24z" fill="#fca713" />
          <path d="m160 392h24v32h-24z" fill="#ed8515" />
          <path d="m80 456h24v32h-24z" fill="#f5b142" />
          <path d="m96 424h24v32h-24z" fill="#ed8515" />
          <path d="m80 392h24v32h-24z" fill="#f5b142" />
          <path d="m176 360h24v32h-24z" fill="#f5b142" />
          <path d="m480 352h-24v-56a8.00008 8.00008 0 0 0 -8-8h-184a8.00008 8.00008 0 0 0 -8 8v64a8.00008 8.00008 0 0 0 8 8h24v48h-16v-24a8.00008 8.00008 0 0 0 -8-8h-56v-24a8.00008 8.00008 0 0 0 -8-8h-80a8.00008 8.00008 0 0 0 -8 8v24h-88a8.00008 8.00008 0 0 0 -8 8v32a8.00008 8.00008 0 0 0 8 8h8v16h-8a8.00008 8.00008 0 0 0 -8 8v32a8.00008 8.00008 0 0 0 8 8h424a8.00008 8.00008 0 0 0 8-8v-56h24a8.00008 8.00008 0 0 0 8-8v-64a8.00008 8.00008 0 0 0 -8-8zm-40 0h-64v-48h64zm-64 64v-48h16v48zm-168 32v-16h64v16zm-16-16v16h-64v-16zm-80-16v-16h64v16zm0 16v16h-64v-16zm64 32v16h-64v-16zm16 0h64v16h-64zm80 0h8a8.00008 8.00008 0 0 0 8-8v-24h40v48h-56zm72-32h16v48h-16zm0-80v-48h16v48zm-72-48h56v48h-56zm32 64h56v48h-56zm-48 48h-64v-16h64zm-128-48h64v16h-64zm-96 32h64v16h-64zm0 64h64v16h-64zm408 16h-64v-48h64zm32-64h-64v-48h64z" />
          <path d="m120 336v-88a8.00008 8.00008 0 0 0 -8-8h-32a8.00008 8.00008 0 0 0 -8 8v120h16v-112h16v80z" />
          <path d="m200 336v-128a8.00008 8.00008 0 0 0 -8-8h-32a8.00008 8.00008 0 0 0 -8 8v128h16v-120h16v120z" />
          <path d="m280 272v-40a8.00008 8.00008 0 0 0 -8-8h-32a8.00008 8.00008 0 0 0 -8 8v40h16v-32h16v32z" />
          <path d="m360 272v-64a8.00008 8.00008 0 0 0 -8-8h-32a8.00008 8.00008 0 0 0 -8 8v64h16v-56h16v56z" />
          <path d="m440 272v-128a8.00008 8.00008 0 0 0 -8-8h-32a8.00008 8.00008 0 0 0 -8 8v128h16v-120h16v120z" />
          <path d="m98.34277 221.65674a8.00063 8.00063 0 0 0 11.31446 0l90.34277-90.34274 74.34277 74.34278a8.00122 8.00122 0 0 0 11.31446 0l106.34277-106.34278v12.686a8.00008 8.00008 0 0 0 8 8h32a8.00008 8.00008 0 0 0 8-8v-88a8.00008 8.00008 0 0 0 -8-8h-88a8.00008 8.00008 0 0 0 -8 8v32a8.00008 8.00008 0 0 0 8 8h12.68652l-76.68652 76.686-74.34277-74.34274a8.00122 8.00122 0 0 0 -11.31446 0l-120 120a8 8 0 0 0 0 11.31348zm101.65723-138.34274 74.34277 74.34278a8.00122 8.00122 0 0 0 11.31446 0l96-96a8.00038 8.00038 0 0 0 -5.65723-13.65678h-24v-16h72v72h-16v-24a8.0001 8.0001 0 0 0 -13.65723-5.65674l-114.34277 114.34274-74.34277-74.34278a8.00122 8.00122 0 0 0 -11.31446 0l-90.34277 90.34278-12.68652-12.686z" />
        </g>
      </svg>
      <h1>Stocks Analysis App</h1>
      <hr />
      {setSharee.map((stocke) => {
        return (
          <button
            className="btn"
            onClick={() => clickStockes(stocke)}
            key={stocke}
            style={{ cursor: "pointer", padding: ".5rem", margin: ".5rem" }}
          >
            {stocke}
          </button>
        );
      })}
      <hr />

      <ul>
        {allStockes[nStocke].map((stocke) => {
          return (
            <li
              key={stocke.stockee}
              style={{
                backgroundColor: "lightgray",
                padding: "1rem 1rem",
                textAlign: "left",
                margin: "1rem",
                borderRadius: "0.5rem",
                listStyle: "none"
              }}
            >
              <div> {stocke.stockee} </div>
              <div> {stocke.rate}</div>
            </li>
          );
        })}
      </ul>

      <hr></hr>
    </div>
  );
}
