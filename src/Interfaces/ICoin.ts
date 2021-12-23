export default interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    percent_change_1h: string;
    percent_change_24h: string;
    percent_change_7d: string;
    volume_24h: string;
    price_usd: string;
    price_btc: string;
    market_cap_usd: string;
}


export const mapResponseToCoinArray = (response: any): any[] => {
    const coins: ICoin[] = [];
    response.forEach((coin: any) => {
        coins.push({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            rank: coin.rank,
            percent_change_1h: coin.percent_change_1h,
            percent_change_24h: coin.percent_change_24h,
            percent_change_7d: coin.percent_change_7d,
            volume_24h: coin.volume24,
            price_usd: coin.price_usd,
            price_btc: coin.price_btc,
            market_cap_usd: coin.market_cap_usd,
        });
    });
    return coins;
};

export const mapResponseToCoin = (response: any): any => {
    const coin: ICoin = {
        id: response.id,
        name: response.name,
        symbol: response.symbol,
        rank: response.rank,
        percent_change_1h: response.percent_change_1h,
        percent_change_24h: response.percent_change_24h,
        percent_change_7d: response.percent_change_7d,
        volume_24h: response.volume24,
        price_usd: response.price_usd,
        price_btc: response.price_btc,
        market_cap_usd: response.market_cap_usd,
    };
    return coin;
};
