import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth'

const userName = atomWithStorage<User | null>('CISignedInUser', null)

export function useAuth () {
  const [user, setUser] = useAtom(userName)

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
      console.log(error.code)
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
