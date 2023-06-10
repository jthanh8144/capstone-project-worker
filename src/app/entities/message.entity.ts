import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Index,
} from 'typeorm'
import { MessageEncryptTypeEnum, MessageTypeEnum } from '../../shared/constants'
import { EncryptTypeTransformer } from '../../database/column-transformers'

@Entity({ name: 'messages' })
@Index(['senderId', 'conservationId'])
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  message: string

  @Column({ name: 'message_type', type: 'enum', enum: MessageTypeEnum })
  messageType: MessageTypeEnum

  @Column({
    name: 'encrypt_type',
    type: 'enum',
    enum: MessageEncryptTypeEnum,
    default: MessageEncryptTypeEnum.one,
    transformer: new EncryptTypeTransformer(),
  })
  encryptType: MessageEncryptTypeEnum

  @Column({ name: 'is_removed', default: false })
  isRemoved: boolean

  @Column({ name: 'sender_id' })
  senderId: string

  @Column({ name: 'conservation_id' })
  conservationId: string

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  deletedAt: Date
}
