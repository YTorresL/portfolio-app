const admin = require('firebase-admin')

const serviceAccount = require('./serviceAccountKey.json')

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
} catch (e) {
  console.log(e)
}

export const firestore = admin.firestore()
