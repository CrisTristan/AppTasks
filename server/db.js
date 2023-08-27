import { createPool } from 'mysql2/promise'
import {DB_PASSWORD} from './config.js'
export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: DB_PASSWORD,
    database: 'tasksdb'
})


