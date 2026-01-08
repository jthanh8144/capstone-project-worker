import { createTransport } from 'nodemailer'
import { environment } from '../constants'

const mailService = createTransport(
  {
    host: environment.mail.host,
    port: environment.mail.port,
    secure: environment.mail.secure,
    auth: {
      user: environment.mail.user,
      pass: environment.mail.password,
    },
  },
  { from: environment.mail.from },
)

export default mailService
