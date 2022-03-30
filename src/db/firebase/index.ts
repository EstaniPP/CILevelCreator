import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, collection, getDocs, getDoc, deleteDoc } from 'firebase/firestore'
import { levelType } from '../../types'
import { createIndex } from '../../utils/fileManager'

const process = import.meta.env

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.VITE_APIKEY,
  authDomain: process.VITE_AUTHDOMAIN,
  projectId: process.VITE_PROJECTID,
  storageBucket: process.VITE_STORAGEBUCKET,
  messagingSenderId: process.VITE_MESSAGINGSENDERID,
  appId: process.VITE_APPID
} as FirebaseOptions

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const addNewLevel = async (level : levelType) => {
  const docRef = doc(db, level.difficulty, createIndex(level))
  const docSnap = await getDoc(docRef)
  if (!docSnap.exists()) {
    await setDoc(doc(db, level.difficulty, createIndex(level)), { ...level, id: createIndex(level) })
    return true
  } else {
    return false
  }
}

const getLevels = async (difficulty: string) => {
  const levels : levelType[] = [];
  (await getDocs(collection(db, difficulty))).forEach(doc => {
    levels.push(doc.data() as levelType)
  })
  return levels
}

const deleteLevel = async (difficulty: string, id: number, levels: levelType[]) => {
  try {
    await deleteDoc(doc(db, difficulty, id.toString()))
    return levels.filter(level => level.id !== id)
  } catch (error:any) {
    throw error.message
  }
}

export { addNewLevel, getLevels, deleteLevel }
