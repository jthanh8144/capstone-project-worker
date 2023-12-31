import { createTransport } from 'nodemailer'
import { environment } from '../constants'

const mailService = createTransport(
  {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: environment.mail.user,
      pass: environment.mail.password,
    },
  },
  {
    from: '"No Reply" <noreply.safe-talk@jthanh8144.studio>',
  },
)

export default mailService
