import typeorm from 'typeorm';

import config from '../config/index.js';
import entities from './entity/index.js';

const initConnection = async () => {
    try {
        const connection = await typeorm.createConnection({
            entities,
            ...config.database
        });
        console.log('Database connection successfully established');

        return connection;
    } catch ( error ) {
        console.error(error);
        process.exit(1);
    }
}

export default initConnection();