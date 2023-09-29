import {initializeApp} from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
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

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async userAuth => {
	const userDocRef = doc(db, 'users', userAuth.uid )

	const userSnapshot = await getDoc(userDocRef)

	if (!userSnapshot.exists()) {
		const {displayName, email} = userAuth
		const createdAt = new Date()
		try {
			await setDoc(userDocRef,
				{displayName,
					email,
					createdAt,
				})
		} catch (error) {
			console.log('error creating the user', error.message)
		}
	}
	return userDocRef
}
