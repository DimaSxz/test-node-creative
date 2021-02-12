import axios from '../utils/axios.js';

import db from '../db/index.js';
import { Currency } from '../db/model/index.js';

const getLatestCurrencies = async () => {
    try {
        const response = await axios.get("/latest/", {
            params: {
                symbols: 'RUB,EUR,USD,JPY'
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default {
    getExchangeRatesByDate: async ctx => {
        const { date } = ctx.request.query;

        ctx.body = { date };
    },
    getRatioOfCurrencies: async ctx => {
        const { from, to, amount = 1 } = ctx.request.query;

        const { rates } = await getLatestCurrencies();

        const currencyRepo = (await db).getRepository(Currency);

        let currency = new Currency(rates.RUB, rates.USD, rates.EUR, rates.JPY);

        currency = await currencyRepo.save(currency);

        const ratio = rates[to] / rates[from];

        ctx.body = { from, to, ratio, sum: ratio * amount };
    }
};