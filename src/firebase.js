import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJ8-39hgll8AOFM0IqcUUvNqCwBUWFiyY",
  authDomain: "whatsapp-clone-c2424.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-c2424.firebaseio.com",
  projectId: "whatsapp-clone-c2424",
  storageBucket: "whatsapp-clone-c2424.appspot.com",
  messagingSenderId: "244835873233",
  appId: "1:244835873233:web:4c4df2860eb1d57c1630f0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
