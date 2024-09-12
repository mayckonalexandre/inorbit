import { defineConfig } from 'drizzle-kit';
import { env } from './src/config/env';

export default defineConfig({
  dialect: 'postgresql', // "mysql" | "sqlite" | "postgresql"
  schema: './src/db/schema.ts',
  out: './.migrations',
  dbCredentials: {
    url: env.DATABASEURL,
  },
});
