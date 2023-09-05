import React, { useEffect, useState } from "react";
import "bootswatch/dist/vapor/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import GetApi from "./utils/GetApi";
import TableCoin from "./components/TableCoin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    GetApi().then((data) => {
      //console.log(data);
      setCoins(data);
    });
  }, []);

  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg bg-primary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Coin app
            </a>

            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
                name="coinSearch"
                onChange={(e) => {
                  console.log(e.target.value);
                  setSearch(e.target.value);
                }}
              />
            </form>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <TableCoin coins={coins} search={search} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
