import Joi from 'joi'

export const envSchema = {
  NODE_ENV: Joi.string()
    .valid('local', 'development', 'production', 'staging')
    .default('development'),
  APP_PORT: Joi.number().required(),
  DB_NAME: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_PORT: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.string().required(),
  REDIS_PASS: Joi.string().required(),
  WORKER_EVENT: Joi.string().required(),
  WORKER_MAIL: Joi.string().required(),
  WORKER_CRON: Joi.string().required(),
  PROJECT_ID: Joi.string().required(),
  PRIVATE_KEY_ID: Joi.string().required(),
  PRIVATE_KEY: Joi.string().required(),
  CLIENT_EMAIL: Joi.string().required(),
  CLIENT_ID: Joi.string().required(),
  CLIENT_CERT_URL: Joi.string().required(),
}
