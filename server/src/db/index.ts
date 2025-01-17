import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { env } from '../config/env';

export const client = postgres(env.DATABASEURL);
export const db = drizzle(client, { schema, logger: true });
