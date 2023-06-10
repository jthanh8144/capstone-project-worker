import { Server, Socket } from 'socket.io'

import { environment } from '../constants'
import { logger } from './logger.provider'
import { UserRepository } from '../../app/repositories'

class SocketProvider {
  public socket: Server
  private userRepository: UserRepository

  constructor() {
    this.socket = new Server(environment.port)
    this.userRepository = new UserRepository()
  }

  public async initialize() {
    try {
      this.socket.on('connection', async (sk: Socket) => {
        console.log('Socket connected', sk.id)
        const { roomId } = sk.handshake.query
        if (typeof roomId === 'string') {
          sk.join(roomId)
          await this.userRepository.updateUser(roomId, { isOnline: true })
        }

        sk.on('disconnect', async () => {
          console.log('Socket disconnected')
          sk.disconnect()
          if (typeof roomId === 'string') {
            await this.userRepository.updateUser(roomId, { isOnline: false })
          }
        })
      })
    } catch (err: any) {
      logger.error(err.message)
    }
  }
}

export const socketProvider = new SocketProvider()
export default socketProvider.socket
