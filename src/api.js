import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.coinpaprika.com/v1',
});

///exchanges    /coins
export const getItem = {
	tickersApi: () => api.get('tickers'),
	exchangesApi: () => api.get('exchanges'),
	coinsApi: () => api.get('coins'),
};
