import { DataSource } from 'typeorm';
import path from 'path';
import "reflect-metadata"

const __dirname = import.meta.dirname;
const databasePath = path.join(__dirname, 'data/database.sqlite');

export const dataSource = new DataSource({
    type: 'sqlite',
    database: databasePath,
    synchronize: true,
    logging: true,
    entities: [__dirname + '/entities/*.ts'],
});