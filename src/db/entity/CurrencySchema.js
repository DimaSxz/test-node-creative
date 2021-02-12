import typeorm from 'typeorm';
import Currency from '../model/Currency.js';

const { EntitySchema } = typeorm;

export default new EntitySchema({
    name: 'Currency',
    target: Currency,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        rub: {
            type: 'double',
        },
        usd: {
            type: 'double'
        },
        eur: {
            type: 'double'
        },
        jpy: {
            type: 'double'
        },
        createdAt: {
            name: 'created_at',
            type: 'timestamp',
            createDate: true,
        },
        updatedAt: {
            name: 'updated_at',
            type: 'timestamp',
            createDate: true,
            updateDate: true
        }
    }
});