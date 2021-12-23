import axios from 'axios';

const url = "https://api.coinlore.net/api";

export const getCoins = async () => axios.get(`${url}/tickers/`);
export const getCoin = async (id: string) => axios.get(`${url}/ticker/?id=${id}`);