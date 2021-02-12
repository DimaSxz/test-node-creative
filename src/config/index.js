import 'dotenv/config.js';

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        app: {
            port: process.env.APP_PORT || 80
        },
        api: {
            root: process.env.API_ROOT || '',
            version: process.env.API_VERSION || process.env.npm_package_version
        },
        database: {
            type: process.env.DB_TYPE || 'mysql',
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 3306,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            synchronize: process.env.DB_SYNC ? process.env.DB_SYNC === "true" : undefined,
            logging: process.env.DB_LOG ? process.env.DB_LOG === "true" : undefined,
        },
        externalApi: {
            url: process.env.EXT_API_URL,
            key: process.env.EXT_API_KEY
        }
    },
    production: {
        //
    }
};


export default {
    env,
    ...config[env]
};
