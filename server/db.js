import { createPool } from 'mysql2/promise'
import {DB_PASSWORD} from './config.js'
export const pool = createPool({
    host: 'sql10.freesqldatabase.com',
    port: 3306,
    user: 'sql10642687',
    password: bdaEXyxvKi,
    database: 'sql10642687'
})


