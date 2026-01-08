import { getMessaging } from 'firebase-admin/messaging'

export const pushNotification = async (
  tokens: string[],
  notification: { title: string; body?: string; imageUrl?: string },
) => {
  const message = getMessaging()
  switch (tokens.length) {
    case 0:
      break
    case 1:
      await message.send({ token: tokens[0], notification })
      break
    default:
      await message.sendEachForMulticast({ tokens, notification })
  }
  await message.sendEachForMulticast({
    tokens,
    notification,
  })
}
