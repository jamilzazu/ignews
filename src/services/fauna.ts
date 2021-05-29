import { Client } from 'faunadb'

export const fauna = new Client({
  secret: process.env.FaunaDB_KEY,
})