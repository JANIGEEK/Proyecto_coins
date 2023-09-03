import React from "react";
import RowCoins from "./RowCoins";

const TableCoin = ({ coins, search }) => {

  const filteredCoins=coins.filter((coin) =>
  coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Price Change</th>
          <th scope="col">24h Volume</th>
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin,index) => (
          <RowCoins coin={coin} key={index} index={index+1}/>
        ))}
      </tbody>
    </table>
  );
};

export default TableCoin;
