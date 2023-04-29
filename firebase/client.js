import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB60xBJld8qubLvb7fYpfEILST-y2ob-ns",
  authDomain: "portfolio-app-aa599.firebaseapp.com",
  projectId: "portfolio-app-aa599",
  storageBucket: "portfolio-app-aa599.appspot.com",
  messagingSenderId: "1046240782827",
  appId: "1:1046240782827:web:91791c7f7b01da3b8fd1ae",
  measurementId: "G-W6L0HKE2KW",
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const fetchPortfolio = () => {
  return db
    .collection("portfolio")
    .orderBy("Date", "desc")
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        return { id, ...data }
      })
    })
}
