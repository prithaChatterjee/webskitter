import "firebase/auth";
import { initializeApp} from "firebase/app";

const app = {
    apiKey: "AIzaSyBdwSe-iJXcMep3urKolzGqIJGl3v016MA",
    authDomain: "auth-interview.firebaseapp.com",
    databaseURL: "https://auth-interview-default-rtdb.firebaseio.com",
    projectId: "auth-interview",
    storageBucket: "auth-interview.appspot.com",
    messagingSenderId: "618095158653",
    appId: "1:618095158653:web:d2da13e79f30fb46c25814"
}

export const auth = initializeApp(app)

export default app