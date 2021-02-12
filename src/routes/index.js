import Router from 'koa-router';
import { posix as path } from 'path';

import config from '../config/index.js'
import controller from '../controllers/index.js';

const router = new Router({
    prefix: path.join("/", config.api.root, config.api.version),
});

router
    .get('/exchange-rates', controller.getExchangeRatesByDate)
    .get('/exchange-ratio', controller.getRatioOfCurrencies)
;

console.log('Evailable routes:', router.stack.map(i => i.path));

export default router;