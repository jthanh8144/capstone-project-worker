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

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  @Index({ unique: true })
  email: string

  @Column({ select: false })
  password: string

  @Column({ name: 'full_name', nullable: true })
  fullName: string

  @Column({ name: 'avatar_url', nullable: true })
  avatarUrl: string

  @Column({ name: 'is_verified', default: false })
  isVerified: boolean

  @Column({ name: 'is_active', default: true })
  isActive: boolean

  @Column({ name: 'is_online', default: false })
  isOnline: boolean

  @Column({ name: 'fcm_token', nullable: true })
  fcmToken: string

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
