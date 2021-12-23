import { useEffect, useState } from "react";
import CoinList from "./components/CoinList";
import Coin from "./components/Coin";
import ICoin, { mapResponseToCoinArray } from "./Interfaces/ICoin";
import { getCoins } from "./api";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [coins, setCoins] = useState<ICoin[]>([]);

  useEffect(() => {
    getCoins()
      .then((data) => {
        const coins = mapResponseToCoinArray(data.data.data);
        setCoins(coins);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="flex justify-center my-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoinList coins={coins} />} />
          <Route path="coin/:id" element={<Coin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
