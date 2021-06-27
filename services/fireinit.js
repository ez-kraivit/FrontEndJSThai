import firebase from 'firebase/app'
import 'firebase/auth'

let config = {
    apiKey: process.env.API_KEY,
    appId: process.env.APP_ID,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    messagingSenderId: process.env.MESSAGEING_SENDERID,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const auth = firebase.auth();
export const auth = firebase.auth();
export const GoogleProvider = new firebase.auth.GithubAuthProvider()
export default firebase