const admin = require("firebase-admin")
const key = require("./serviceAccountKey.json")

try {
  admin.initializeApp({
    credential: admin.credential.cert(key),
  })
} catch (e) {
  console.log(e)
}

export const firestore = admin.firestore()
