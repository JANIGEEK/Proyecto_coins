import React from "react";

const RowCoins = ({coin,index}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>
        <img src={coin.image} alt={coin.name} style={{width:'4%'}} className="img-fluid me-4"/>
        <span className="me-4">{coin.name}</span>
        <span className="text-uppercase text-muted">{coin.symbol}</span>
      </td>
      <td>{coin.current_price}</td>
      <td>{coin.price_change_percentage_24h}</td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};

export default RowCoins;
