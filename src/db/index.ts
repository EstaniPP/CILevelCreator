import db from './firebase'
import { doc, setDoc, collection, getDocs } from 'firebase/firestore'
import { levelType } from '../types'

const createIndex = (level: levelType) => {
  let binaryId = ''
  level.rows.forEach((row) => {
    binaryId += row.config
  })
  return parseInt(binaryId, 2).toString()
}

const addNewLevel = async (level : levelType) => {
  await getDocs(collection(db, 'easy'))
  setDoc(doc(db, level.difficulty, createIndex(level)), { ...level, id: createIndex(level) }).then((data) => { console.log('data', data) })
}

export default { addNewLevel }
