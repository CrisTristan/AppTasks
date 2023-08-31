import { createPool } from 'mysql2/promise'
import {DB_PASSWORD} from './config.js'

export const pool = createPool({
    host: 'aws.connect.psdb.cloud',
    //port: 3306,
    user: 'kmh5ctt6ql0i2qwkf3n9',
    password: DB_PASSWORD,
    database: 'tasksdb',
    ssl: {
       rejectUnauthorized: false
    }
})


