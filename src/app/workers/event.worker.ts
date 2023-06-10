import { Job, DoneCallback } from 'bull'
import { plainToInstance } from 'class-transformer'

import { EventData } from '../typings'
import { pushNotification } from '../utils'
import { logger, socketServer } from '../../shared/providers'
import { eventQueue } from '../../shared/configs/worker.config'

class EventWorker {
  public async initialize() {
    await eventQueue.process(async (job: Job, done: DoneCallback) => {
      try {
        const { data, eventName, to, firebaseData } = plainToInstance(
          EventData,
          job.data,
        )
        socketServer.to(to).emit(eventName, data)
        if (firebaseData) {
          await pushNotification(firebaseData.tokens, firebaseData.notification)
        }
      } catch (err: any) {
        logger.error(err.message)
      } finally {
        done()
      }
    })
  }
}

export const eventWorker = new EventWorker()
