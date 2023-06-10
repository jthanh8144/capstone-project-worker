import { Job, DoneCallback } from 'bull'

import { cronQueue } from '../../shared/configs/worker.config'
import { MessageRepository } from '../repositories'
import { logger } from '../../shared/providers'

class CronWorker {
  public async addJob() {
    if ((await cronQueue.getRepeatableCount()) === 0) {
      await cronQueue.add({}, { repeat: { cron: '*/30 * * * *' } })
    }
  }

  public async initialize() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    await cronQueue.process(async (_job: Job, done: DoneCallback) => {
      try {
        const messageRepository = new MessageRepository()
        await messageRepository.removeMessagesAfter30Days()
      } catch (err: any) {
        logger.error(err.message)
      } finally {
        done()
      }
    })
  }
}

export const cronWorker = new CronWorker()
