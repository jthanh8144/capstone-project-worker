import { Job, DoneCallback } from 'bull'
import { plainToInstance } from 'class-transformer'

import { MailData } from '../typings'
import { logger } from '../../shared/providers'
import { mailQueue } from '../../shared/configs/worker.config'
import mailService from '../../shared/configs/mail-service.config'

class MailWorker {
  public async initialize() {
    await mailQueue.process(async (job: Job, done: DoneCallback) => {
      try {
        const { data } = plainToInstance(MailData, job.data)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { from, ...sendData } = data
        await mailService.sendMail(sendData)
      } catch (err: any) {
        logger.error(err.message)
      } finally {
        done()
      }
    })
  }
}

export const mailWorker = new MailWorker()
