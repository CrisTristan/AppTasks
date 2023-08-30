import { createPool } from 'mysql2/promise'
import {DB_PASSWORD} from './config.js'

export const pool = createPool({
    host: 'aws.connect.psdb.cloud',
    //port: 3306,
    user: 'wbloj0l663ofr20ocwk2',
    password: DB_PASSWORD,
    database: 'tasksdb',
    ssl: {
       rejectUnauthorized: false
    }
})


