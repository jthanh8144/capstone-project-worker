export const environment = {
  env: process.env.NODE_ENV,
  port: +(process.env.APP_PORT || 0),
  database: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
  },
  mail: {
    host: process.env.MAIL_HOST || 'smtp.gmail.com',
    port: +(process.env.MAIL_PORT || '465'),
    secure: process.env.MAIL_SECURE === 'true',
    user: process.env.MAIL_USER || '',
    password: process.env.MAIL_PASSWORD || '',
    from:
      process.env.MAIL_FROM || 'No Reply <noreply.safe-talk@jthanh8144.top>',
  },
  firebase: {
    projectId: process.env.PROJECT_ID,
    privateKeyId: process.env.PRIVATE_KEY_ID,
    privateKey: (process.env.PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    clientEmail: process.env.CLIENT_EMAIL,
    clientId: process.env.CLIENT_ID,
    clientCertUrl: process.env.CLIENT_CERT_URL,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: +(process.env.REDIS_PORT || 6379),
    password: process.env.REDIS_PASS,
  },
  workerName: {
    event: process.env.WORKER_EVENT || 'event-queue',
    mail: process.env.WORKER_MAIL || 'mail-queue',
    cron: process.env.WORKER_CRON || 'cron-queue',
  },
}
