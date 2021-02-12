import koa from 'koa';
import logger from 'koa-logger';
import cors from '@koa/cors';

import config from './config/index.js';
import dbConnection from './db/index.js';

import router from './routes/index.js';

const server = new koa();

server
    .use(logger())
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods({
        throw: true
    }))
    .listen(config.app.port, () => {
        console.log(`Koa server was start at ${ config.app.port } port`);
    })
;

export default server;