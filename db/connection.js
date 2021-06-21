
const ENV = process.env.NODE_ENV || 'development';
const { DB_URL } = process.env;


const config = {
   user: "shalom",
  password: "pass",
  host: "localhost",
  port: 5432,
  database: "mishnayos_db",
//  connectionString:  ENV === 'production' ? process.env.DATABASE_URL : '',
//         ssl: ENV === 'production' ?  {
//           rejectUnauthorized: false,
//         } : {},
}

const {Pool, Client} = require('pg');
const pool = new Pool(config);
const client = new Client(config);
module.exports = {pool, client};