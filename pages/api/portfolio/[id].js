import { firestore } from '@/firebase/admin'

export default function handler (req, res) {
  const { query } = req
  const { id } = query

  firestore
    .collection('portfolio')
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id

      res.json({
        ...data,
        id
      })
    })
    .catch(() => {
      res.status(404).end()
    })
}
