import z from 'zod';

const schema = z.object({
  PORT: z.string().transform((value) => Number(value)),
  DATABASEURL: z.string().url(),
});

export const env = schema.parse(process.env);
