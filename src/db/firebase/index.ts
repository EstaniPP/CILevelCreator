import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8k7h6v4HEv7qFNMri1mh7ZyZXCBDywi8',
  authDomain: 'color-inc-levels-api.firebaseapp.com',
  projectId: 'color-inc-levels-api',
  storageBucket: 'color-inc-levels-api.appspot.com',
  messagingSenderId: '425715278139',
  appId: '1:425715278139:web:d800af3741e7c29feed71e'
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default getFirestore(app)
