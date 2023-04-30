const admin = require('firebase-admin')

try {
  admin.initializeApp({
    credential: admin.credential.cert(process.env.FIREBASE_SERVICE_ACCOUNT),
  })
} catch (e) {
  console.log(e)
}

export const firestore = admin.firestore()
