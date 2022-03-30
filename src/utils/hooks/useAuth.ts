import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { errorLoginMessage } from '../../state'

const userName = atomWithStorage<User | null>('CISignedInUser', null)

export function useAuth () {
  const [user, setUser] = useAtom(userName)
  const [, setErrorMessage] = useAtom(errorLoginMessage)

  const signin = async (email: string, password: string) => {
    const auth = getAuth()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if (userCredential) {
        const user = userCredential.user
        setUser(user)
        return true
      }
    } catch (error:any) {
      console.error(error.code)
      setErrorMessage(error.code)
    }
    return false
  }

  const signout = () => {
    const auth = getAuth()
    signOut(auth).then(() => {
      setUser(null)
    }).catch((error) => {
      console.log(error)
    })
  }

  return {
    user,
    signin,
    signout
  }
}
