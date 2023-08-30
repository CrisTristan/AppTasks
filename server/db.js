import { createPool } from 'mysql2/promise'
import {DB_PASSWORD} from './config.js'
export const pool = createPool({
    host: 'aws.connect.psdb.cloud',
    port: 3306,
    user: '44tsp5zyb4gutrjj2u7k',
    password: DB_PASSWORD,
    database: 'tasksdb'
})


