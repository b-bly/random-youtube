import { pool } from './pool';
import { Pool, QueryResult, PoolClient } from 'pg';

class Database {
  constructor(private pool: Pool = pool) { }

  async getDBClient() {
    let client: PoolClient;
    try {
      client =  await this.pool.connect();
      return client;
    } catch (err) {
      console.log(err);
      return err;
    } 
  }

  async query(query: string, values?: [any]): Promise<QueryResult<any>> {
    const client = await this.getDBClient();
    try {
      if (values) {
        return await client.query(query, values);  
      } else {
        return await client.query(query);
      }
    } catch (err) {
      console.log(err);
      return err;
    } finally {
      client.release();
    }
  }
}

export const database = new Database(pool);