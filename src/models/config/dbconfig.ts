import { app } from "./config";
// import fastifyPostgres from "@fastify/postgres";
const fastifySqlite = require('fastify-sqlite')

// app.register(fastifyPostgres, {
//     connectionString: 'postgres://postgres@localhost/postgres'
// })
const connectdb = async () => {
    await app.register(require('fastify-sqlite'), {
        promiseApi: true, // the DB instance supports the Promise API. Default false
        name: 'demo.db', // optional decorator name. Default null
        verbose: true, // log sqlite3 queries as trace. Default false
        dbFile: ':memory:', // select the database file. Default ':memory:'
        mode: fastifySqlite.sqlite3.OPEN_READONLY 
          // how to connecto to the DB, Default: OPEN_READWRITE | OPEN_CREATE | OPEN_FULLMUTEX
    })
}
connectdb()
