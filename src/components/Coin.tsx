import { getCoin } from "../api";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ICoin, { mapResponseToCoin } from "../Interfaces/ICoin";

const isGreaterOrEqualToZero = (value: string | number) => Number(value) >= 0;
const getRowDescription = (description: string, value: string | number, changeRedAndGreen: boolean, addSymbol: string = "") => {
  const valueClassName = changeRedAndGreen ? (isGreaterOrEqualToZero(value) ? "text-green-600" : "text-danger") : "text-blue-400";
  return (
    <div className="flex w-full">
      <div className="text-primary w-1/2">{`${description}:`}</div>
      <div className={`text-left w-1/2 ${valueClassName}`}>{`${addSymbol !== "" ? `${addSymbol} ` : ""}${value}`}</div>
    </div>
  );
};
const CoinContainer = styled.div.attrs((props) => ({ className: props.className }))`
  background-color: rgba(236, 232, 232, 0.062);
`;

const Coin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState<ICoin | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getCoin(id)
        .then((data) => {
          const coin = mapResponseToCoin(data.data[0]);
          setCoin(coin);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    (loading && <div className="text-blue-200 text-xl">Loading...</div>) ||
    (coin && (
      <CoinContainer className="flex flex-col w-4/5 sm:w-2/6 rounded py-4 px-4 sm:px-10 drop-shadow-2xl">
        <h1 className="text-center text-2xl text-green-300 pb-4">{coin.name}</h1>
        <div>
          {getRowDescription("Symbol", coin.symbol, false)}
          {getRowDescription("Rank", coin.rank, false)}
          {getRowDescription("USD Price", coin.price_usd, false, "$")}
          {getRowDescription("Market Cap", coin.market_cap_usd, false, "$")}
          {getRowDescription("24hr Change", coin.percent_change_24h, true, "%")}
          {getRowDescription("24hr Volume", coin.volume_24h, true, "$")}
        </div>
        <button className=" bg-green-500 hover:bg-green-700 font-bold my-4 px-4 rounded" onClick={() => navigate("/")}>
          Go Back
        </button>
      </CoinContainer>
    ))
  );
};

export default Coin;
