import {initializeApp} from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from 'firebase/auth'

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDCGpvNyn6feCWWTPNtDaiRVPGgHDRmUjw',
	authDomain: 'crwn-clothing-db-542dc.firebaseapp.com',
	projectId: 'crwn-clothing-db-542dc',
	storageBucket: 'crwn-clothing-db-542dc.appspot.com',
	messagingSenderId: '870984799255',
	appId: '1:870984799255:web:bab261184a72519f3a3852',
}

const firebaseapp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return

	const userDocRef = doc(db, 'users', userAuth.uid )

	const userSnapshot = await getDoc(userDocRef)

	if (!userSnapshot.exists()) {
		const {displayName, email} = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef,
				{
					displayName,
					email,
					createdAt,
					...additionalInformation,
				})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
	}
	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return
	return await createUserWithEmailAndPassword(auth, email, password)
}
