import { Pool } from 'pg';

const config = {
    host: 'localhost',
    user: 'postgres',
    database: 'red_social',
    password: 'root'
}
const pool = new Pool(config);
if (pool) {
    console.log('database conected');
} else {
    console.log('database error')
}

export default pool;