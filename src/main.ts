import 'dotenv/config'
import { initializeApp, cert } from 'firebase-admin/app'

import {
  databaseProvider,
  envLoadProvider,
  socketProvider,
} from './shared/providers'
import { cronWorker, eventWorker, mailWorker } from './app/workers'
import { firebaseConfig } from './shared/configs/firebase.config'
;(async () => {
  initializeApp({
    credential: cert(firebaseConfig as any),
  })
  envLoadProvider.validate()
  await databaseProvider.initialize()
  await socketProvider.initialize()

  eventWorker.initialize()
  mailWorker.initialize()
  cronWorker.initialize()
  cronWorker.addJob()
})()
