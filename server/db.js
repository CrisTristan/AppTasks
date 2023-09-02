import { createPool } from 'mysql2/promise'
import {DB_PASSWORD} from './config.js'

export const pool = createPool({
    host: 'aws.connect.psdb.cloud',
    user: 'savtty81d9ih8ks599kq',
    password: DB_PASSWORD,
    database: 'tasksdb',
    ssl: {
       rejectUnauthorized: false
    }
})


