import { Repository } from 'typeorm'

import dataSource from '../../shared/configs/data-source.config'
import { User } from '../entities'

export class UserRepository extends Repository<User> {
  constructor() {
    super(User, dataSource.manager)
  }

  public async updateUser(id: string, data: UpdateUserType) {
    await this.createQueryBuilder()
      .update(User)
      .set({ ...data })
      .where('id = :id')
      .setParameters({ id })
      .execute()
  }
}

// #region typing
type UpdateUserType = {
  isVerified?: boolean
  isActive?: boolean
  fullName?: string
  password?: string
  avatarUrl?: string
  isOnline?: boolean
  fcmToken?: string
}
// #endregion
