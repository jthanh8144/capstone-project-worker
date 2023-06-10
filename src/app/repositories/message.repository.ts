import { LessThanOrEqual, Repository } from 'typeorm'
import dataSource from '../../shared/configs/data-source.config'
import { Message } from '../entities'

export class MessageRepository extends Repository<Message> {
  constructor() {
    super(Message, dataSource.manager)
  }

  public async removeMessagesAfter30Days() {
    const time = new Date()
    time.setDate(time.getDate() - 30)
    const messages = await this.find({
      where: { createdAt: LessThanOrEqual(time) },
    })
    if (messages.length) {
      await this.remove(messages)
    }
  }
}
