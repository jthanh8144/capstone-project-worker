import { SendMailOptions } from 'nodemailer'
import { MessageEncryptTypeEnum, MessageTypeEnum } from '../../shared/constants'
import { User } from '../entities'

enum FriendEnum {
  accepted = 'accepted',
  declined = 'declined',
  pending = 'pending',
}

type FriendRequestData = {
  type: 'received' | 'requested'
  status?: FriendEnum
}

type MessageData = {
  conservationId: string
  user: User
  messageId: string
  message: string
  messageType: MessageTypeEnum
  encryptType: MessageEncryptTypeEnum
}

export class EventData {
  to: string | string[]
  eventName: 'friendRequest' | 'message'
  data: FriendRequestData | MessageData
  firebaseData?: {
    tokens: string[]
    notification: { title: string; body?: string; imageUrl?: string }
  }
}

export class MailData {
  data: SendMailOptions
}
