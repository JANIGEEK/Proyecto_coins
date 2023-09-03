import React, { useEffect, useState } from "react";
import "bootswatch/dist/vapor/bootstrap.min.css";
import './App.css';
import Header from "./components/Header";
import GetApi from "./utils/GetApi";
import TableCoin from "./components/TableCoin";

function App() {
  const [coins, setCoins]=useState([]);
  const [search, setSearch]=useState('');
  

  useEffect(()=>{
    GetApi()
    .then((data)=>{
      //console.log(data);
      setCoins(data)
    })
  },[])

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <TableCoin coins={coins} search={search}/>
          </div>
        </div>
        
      </main>
    </>
  );
}

export default App;
