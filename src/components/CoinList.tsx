import { Link } from "react-router-dom";
import ICoin from "../Interfaces/ICoin";
import { useState } from "react";
import Search from "./Search";

const isGreaterOrEqualToZero = (value: string) => Number(value) >= 0;

const CoinList = (props: { coins: ICoin[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCoins = props.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="w-full flex flex-col items-center">
      <Search setSearchTerm={setSearchTerm} />
      <div className="text-primary  w-4/5 sm:w-1/3">
        {filteredCoins.map((coin: ICoin) => (
          <div key={coin.id} className="flex flex-row w-full border-b border-gray-400/25">
            <Link className="w-2/6 sm:w-1/4 hover:text-blue-400 cursor-pointer" to={`coin/${coin.id}`}>
              {coin.name}
            </Link>
            <p className="w-1/6 sm:w-1/4 text-center">{coin.symbol}</p>
            <p className="w-2/6 sm:w-1/4 text-right">{`$ ${coin.price_usd}`}</p>
            <p className={`w-1/6 sm:w-1/4 text-right ${isGreaterOrEqualToZero(coin.percent_change_1h) ? "text-green-600" : "text-danger"}`}>{coin.percent_change_1h}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinList;
